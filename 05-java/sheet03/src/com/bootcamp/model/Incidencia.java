package com.bootcamp.model;

public class Incidencia {

    private long id;
    private String descripcion;
    private Prioridad prioridad;
    private Estado estado;
    private Responsable responsable;

    public Incidencia(long id, String descripcion, Prioridad prioridad) {
        this.id = id;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = Estado.ABIERTA;
        this.responsable = null;
    }

    public long getId() {
        return id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Prioridad getPrioridad() {
        return prioridad;
    }

    public Responsable getResponsable() {
        return responsable;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setPrioridad(Prioridad prioridad) {
        this.prioridad = prioridad;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public void setResponsable(Responsable responsable) {
        this.responsable = responsable;
    }

    @Override
    public String toString() {
        String responsableAsignado = (responsable != null) ? responsable.getNombre() : "Sin asignar";
        return "Incidencia ID: " + id + ", Descripción: " + descripcion + ", Prioridad: " + prioridad +
                ", Estado: " + estado + ", Responsable: " + responsableAsignado;
    }

}
