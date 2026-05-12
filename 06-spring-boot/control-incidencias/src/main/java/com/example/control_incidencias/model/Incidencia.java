package com.example.control_incidencias.model;

public class Incidencia {

    private Long id;
    private String descripcion;
    private Prioridad prioridad;
    private Estado estado;
    private Tecnico tecnico;
    private boolean activa;

    public Incidencia(long id, String descripcion, Prioridad prioridad) {
        this.id = id;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = Estado.ABIERTA;
        this.tecnico = null;
        this.activa = true;
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

    public Tecnico getTecnico() {
        return tecnico;
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

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
    }

    public boolean isActiva() {
        return activa;
    }

    public void desactivarIncidencia() {
        this.activa = false;
    }

    public void activarIncidencia() {
        this.activa = true;
    }
}
