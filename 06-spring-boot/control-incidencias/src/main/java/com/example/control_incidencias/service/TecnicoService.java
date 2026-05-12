package com.example.control_incidencias.service;

import com.example.control_incidencias.dto.TecnicoRequestDTO;
import com.example.control_incidencias.dto.TecnicoResponseDTO;
import com.example.control_incidencias.exception.RecursoNoEncontradoException;
import com.example.control_incidencias.model.Tecnico;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TecnicoService {
    private final List<Tecnico> tecnicos = new ArrayList<>();


    public TecnicoService() {
        tecnicos.add(new Tecnico(1L, "Juan"));
        tecnicos.add(new Tecnico(2L, "María"));
        tecnicos.add(new Tecnico(3L, "Pedro"));
    }

    public List<TecnicoResponseDTO> listarTodosTecnicos() {
        return tecnicos.stream()
                .filter(Tecnico::isActivo)
                .map(this::mapearADTO)
                .toList();
    }

    public TecnicoResponseDTO buscarTecnicoPorId(Long id) {
        return buscarModeloPorIdGenerico(id)
                .map(this::mapearADTO)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró el técnico con ID: " + id));
    }

    public TecnicoResponseDTO registrarTecnico(TecnicoRequestDTO tecnicoRequestDTO) {
        long nuevoId = tecnicos.size() + 1L;
        Tecnico nuevoTecnico = new Tecnico(nuevoId, tecnicoRequestDTO.getNombre());
        tecnicos.add(nuevoTecnico);
        return mapearADTO(nuevoTecnico);
    }

    public Optional<TecnicoResponseDTO> cambiarNombreTecnico(Long id, String nuevoNombre) {
        return buscarModeloPorIdGenerico(id).map(tecnico -> {
            tecnico.setNombre(nuevoNombre);
            return mapearADTO(tecnico);
        });
    }

    public Optional<TecnicoResponseDTO> eliminarTecnicoPorId(Long id) {
        return buscarModeloPorIdGenerico(id).map(tecnico -> {
            tecnico.desactivarTecnico();
            return mapearADTO(tecnico);
        });
    }


    private TecnicoResponseDTO mapearADTO(Tecnico tecnicoMapeado) {
        TecnicoResponseDTO dto = new TecnicoResponseDTO();
        dto.setId(tecnicoMapeado.getId());
        dto.setNombre(tecnicoMapeado.getNombre());
        return dto;
    }

    private Optional<Tecnico> buscarModeloPorIdGenerico(Long id) {
        return tecnicos.stream()
                .filter(tecnico -> tecnico.getId().equals(id))
                .findFirst();

    }
}
