package com.bootcamp.service;

import com.bootcamp.model.Estado;
import com.bootcamp.model.Incidencia;
import com.bootcamp.model.Responsable;
import com.bootcamp.repository.IncidenciaRepository;

public class IncidenciaService {

    private IncidenciaRepository incidenciaRepository;
    private ResponsableService responsableService;

    public IncidenciaService(IncidenciaRepository incidenciaRepository, ResponsableService responsableService) {
        this.incidenciaRepository = incidenciaRepository;
        this.responsableService = responsableService;
    }

    public void registrarIncidencia(Incidencia incidencia) {
        incidenciaRepository.agregarIncidencia(incidencia);
        System.out.println("Incidencia registrada: " + incidencia.getId());
    }

    public void asignarResponsable(long idIncidencia, long idResponsable) {
        Incidencia incidencia = incidenciaRepository.obtenerIncidenciaPorId(idIncidencia);
        Responsable responsable = responsableService.buscarPorId(idResponsable);

        if (incidencia != null && responsable != null) {
            incidencia.setResponsable(responsable);
            incidencia.setEstado(Estado.ASIGNADA);
            System.out.println(responsable.getNombre().toUpperCase() + " asignado a la incidencia: " + idIncidencia);
        } else {
            System.out.println("Error: Incidencia o Responsable no encontrados.");
        }
    }

    public void cambiarEstadoIncidencia(long idIncidencia, Estado nuevoEstado) {
        Incidencia incidencia = incidenciaRepository.obtenerIncidenciaPorId(idIncidencia);

        if (incidencia != null) {
            incidencia.setEstado(nuevoEstado);
            System.out.println("El estado de la incidencia numero " + idIncidencia + " ha sido cambiado a: "
                    + nuevoEstado);
        } else {
            System.out.println(
                    "Incidencia con ID numero " + idIncidencia + " no encontrada. Imposible cambiar estado.");
        }
    }

    public void listarIncidencias() {
        Incidencia[] todasIncidencias = incidenciaRepository.obtenerTodasLasIncidencias();
        System.out.println("Lista de incidencias:");
        for (Incidencia incidencia : todasIncidencias) {
            System.out.println(incidencia.toString());
        }

        System.out.println("Total de incidencias: " + todasIncidencias.length);
    }

}
