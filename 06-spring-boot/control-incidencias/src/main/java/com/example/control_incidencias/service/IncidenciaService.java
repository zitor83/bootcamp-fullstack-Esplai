package com.example.control_incidencias.service;

import com.example.control_incidencias.dto.IncidenciaRequestDTO;
import com.example.control_incidencias.dto.IncidenciaResponseDTO;
import com.example.control_incidencias.exception.RecursoNoEncontradoException;
import com.example.control_incidencias.model.Estado;
import com.example.control_incidencias.model.Incidencia;
import com.example.control_incidencias.model.Prioridad;
import com.example.control_incidencias.model.Tecnico;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class IncidenciaService {
    private final List<Incidencia> incidencias = new ArrayList<>();

    public IncidenciaService() {
        incidencias.add(new Incidencia(1L, "Falla en el servidor", Prioridad.ALTA));
        incidencias.add(new Incidencia(2L, "Error en la aplicación", Prioridad.ALTA));
        incidencias.add(new Incidencia(3L, "Problema de red", Prioridad.MEDIA));

    }

    public List<IncidenciaResponseDTO> listarTodasIncidencias() {

        return incidencias.stream()
                .filter(Incidencia::isActiva)
                .map(this::mapearADTO)
                .toList();
    }

    public IncidenciaResponseDTO buscarIncidenciaPorId(Long id) {
        return buscarModeloPorId(id)
                .map(this::mapearADTO)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró la incidencia con ID: " + id));
    }

    public IncidenciaResponseDTO registrarIncidencia(IncidenciaRequestDTO incidenciaDto) {
        long nuevoId = incidencias.size() + 1L;
        Incidencia nuevaIncidencia = new Incidencia(nuevoId, incidenciaDto.getDescripcion(), incidenciaDto.getPrioridad());
        incidencias.add(nuevaIncidencia);
        return mapearADTO(nuevaIncidencia);
    }

    public Optional<IncidenciaResponseDTO> asignarTecnico(Long idIncidencia, Tecnico tecnico) {
        return buscarModeloPorId(idIncidencia).map(incidencia -> {
            incidencia.setTecnico(tecnico);
            incidencia.setEstado(Estado.ASIGNADA);
            return mapearADTO(incidencia);
        });
    }

    public Optional<IncidenciaResponseDTO> cambiarEstado(Long idIncidencia, Estado nuevoEstado) {
        return buscarModeloPorId(idIncidencia).map(incidencia -> {
            incidencia.setEstado(nuevoEstado);
            return mapearADTO(incidencia);
        });
    }

    public Optional<IncidenciaResponseDTO> cambiarPrioridad(Long idIncidencia, Prioridad nuevaPrioridad) {
        return buscarModeloPorId(idIncidencia).map(incidencia -> {
            incidencia.setPrioridad(nuevaPrioridad);
            return mapearADTO(incidencia);
        });
    }


    public List<IncidenciaResponseDTO> listarIncidenciasAbiertas() {
        return incidencias.stream()
                .filter(incidencia -> incidencia.getEstado() == Estado.ABIERTA && incidencia.isActiva())
                .map(this::mapearADTO)
                .toList();
    }

    public Optional<Incidencia> eliminarIncidenciaPorId(Long idIncidencia) {
        return buscarModeloPorId(idIncidencia).map(incidencia -> {
            incidencia.desactivarIncidencia();
            return incidencia;
        });
    }

    private IncidenciaResponseDTO mapearADTO(Incidencia incidenciaMapeada) {
        IncidenciaResponseDTO dto = new IncidenciaResponseDTO();
        dto.setId(incidenciaMapeada.getId());
        dto.setDescripcion(incidenciaMapeada.getDescripcion());
        dto.setPrioridad(incidenciaMapeada.getPrioridad());
        dto.setEstado(incidenciaMapeada.getEstado());

        String nombre = (incidenciaMapeada.getTecnico() != null) ? incidenciaMapeada.getTecnico().getNombre() : "Sin asignar";
        dto.setNombreTecnico(nombre);

        return dto;
    }
    private Optional<Incidencia> buscarModeloPorId(Long id) {
        return incidencias.stream()
                .filter(i -> i.getId() == id)
                .findFirst();
}}
