package com.bootcamp.app;

import com.bootcamp.model.Incidencia;
import com.bootcamp.model.Prioridad;
import com.bootcamp.model.Responsable;

public class App {
  public static void main(String[] args) {
        System.out.println("¡Bienvenido a la gestión de incidencias!");
        Incidencia incidencia = new Incidencia(1, "Problema con el servidor", Prioridad.MEDIA);
        System.out.println(incidencia.toString());
        incidencia.setPrioridad(Prioridad.ALTA);
        Responsable responsable = new Responsable(1, "Juan Pérez");
        incidencia.setResponsable(responsable);
        System.out.println(incidencia.toString());
        System.out.println(responsable.toString());
    }
}
