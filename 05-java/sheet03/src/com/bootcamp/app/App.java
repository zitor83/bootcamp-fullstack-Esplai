package com.bootcamp.app;

import com.bootcamp.model.Estado;
import com.bootcamp.model.Incidencia;
import com.bootcamp.model.Prioridad;
import com.bootcamp.model.Responsable;
import com.bootcamp.repository.IncidenciaRepository;
import com.bootcamp.repository.ResponsableRepository;
import com.bootcamp.service.IncidenciaService;
import com.bootcamp.service.ResponsableService;

public class App {
    public static void main(String[] args) {
        System.out.println("GESTIÓN DE INCIDENCIAS - BOOTCAMP FULLSTACK ESPLAI");

        // 1.Crear el repositorio y el servicio
        ResponsableRepository responsableRepository = new ResponsableRepository(10);
        ResponsableService responsableService = new ResponsableService(responsableRepository);

        IncidenciaRepository incidenciaRepository = new IncidenciaRepository();
        IncidenciaService incidenciaService = new IncidenciaService(incidenciaRepository, responsableService);

        // 2.Crear responsables de prueba e incidencias de prueba
        responsableService.registrarResponsable(new Responsable(1L, "Juan Pérez"));
        responsableService.registrarResponsable(new Responsable(2L, "María Gómez"));

        // 3.Registro de incidencias
        System.out.println("\n---REGISTRANDO INCIDENCIAS---");
        incidenciaService.registrarIncidencia(new Incidencia(1L, "Error en la aplicación", Prioridad.ALTA));
        incidenciaService.registrarIncidencia(new Incidencia(2L, "Fallo en la base de datos", Prioridad.MEDIA));
        incidenciaService.registrarIncidencia(new Incidencia(3L, "Pantalla no enciende", Prioridad.BAJA));

        // 4.Simular asignación de responsables
        System.out.println("\n---ASIGNANDO RESPONSABLES---");
        incidenciaService.asignarResponsable(1L, 1L);
        incidenciaService.asignarResponsable(2L, 2L);
        incidenciaService.asignarResponsable(99L, 1L); // Asignación de responsable a una incidencia que no existe

        // 5.Cambio de estado de una incidencia
        System.out.println("\n---CAMBIANDO ESTADO DE INCIDENCIAS---");
        incidenciaService.cambiarEstadoIncidencia(1L, Estado.CERRADA);
        incidenciaService.cambiarEstadoIncidencia(2L, Estado.EN_PROCESO);
        incidenciaService.cambiarEstadoIncidencia(99L, Estado.RESUELTA); // Incidencia que no existe

        // 6.Listar todas las incidencias
        incidenciaService.listarIncidencias();

    }
}
