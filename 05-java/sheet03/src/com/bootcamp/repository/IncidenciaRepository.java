/* Codigo sin usar collections, con arrays y sin nulls
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
*/
package com.bootcamp.repository;

import com.bootcamp.model.Incidencia;
import java.util.ArrayList;
import java.util.List;

public class IncidenciaRepository {

    
    private List<Incidencia> incidencias;

    public IncidenciaRepository() {
        
        this.incidencias = new ArrayList<>();
    }

    public void agregarIncidencia(Incidencia incidencia) {
        
        incidencias.add(incidencia);
    }

    public Incidencia obtenerIncidenciaPorId(long id) {
        
        return incidencias.stream()
                .filter(incidencia -> incidencia.getId() == id)
                .findFirst()
                .orElse(null); 
    }

    public List<Incidencia> obtenerTodasLasIncidencias() {
        return incidencias; // Devolvemos la lista tal cual, ¡ya no hay huecos nulos!
    }
}