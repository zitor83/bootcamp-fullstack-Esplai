package com.bootcamp.service;

import com.bootcamp.model.Incidencia;
import com.bootcamp.model.Responsable;
import com.bootcamp.repository.IncidenciaRepository;

public class IncidenciaService {

    private IncidenciaRepository incidenciaRepository;

    public IncidenciaService(IncidenciaRepository incidenciaRepository) {
        this.incidenciaRepository = incidenciaRepository;
    }

    public void registrarIncidencia(Incidencia incidencia) {
        incidenciaRepository.agregarIncidencia(incidencia);
        System.out.println("Incidencia registrada: " + incidencia.getId());
    }

    public void asignarResponsable(long idIncidencia, Responsable responsable) {
        Incidencia incidencia = incidenciaRepository.obtenerIncidenciaPorId(idIncidencia);
        if (incidencia != null) {
            incidencia.setResponsable(responsable);
            System.out.println(responsable.getNombre().toUpperCase() + " ha sido asignado a la incidencia numero: "
                    + idIncidencia);
        } else {
            System.out.println("Incidencia no encontrada: " + idIncidencia);
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
