package com.bootcamp.repository;

import com.bootcamp.model.Incidencia;

public class IncidenciaRepository {

    private Incidencia[] incidencias;
    private int contador;

    public IncidenciaRepository(int capacidad) {
        this.incidencias = new Incidencia[capacidad];
        this.contador = 0;
    }

    // Método para agregar una incidencia al repositorio
    public void agregarIncidencia(Incidencia incidencia) {
        if (contador < incidencias.length) {
            incidencias[contador] = incidencia;
            contador++;
        } else {
            System.out.println("No se pueden agregar más incidencias. Capacidad máxima alcanzada.");
        }
    }

    // Método para obtener una incidencia por su ID
    public Incidencia obtenerIncidenciaPorId(long id) {
        for (Incidencia incidencia : incidencias) {
            if (incidencia != null && incidencia.getId() == id) {
                return incidencia;
            }
        }
        return null;
    }

    // Método para obtener todas las incidencias(sin null)
    public Incidencia[] obtenerTodasLasIncidencias() {
        Incidencia[] resultadoIncidencias = new Incidencia[contador];
        for (int i = 0; i < contador; i++) {
            resultadoIncidencias[i] = incidencias[i];
        }
        return resultadoIncidencias;
    }

}
