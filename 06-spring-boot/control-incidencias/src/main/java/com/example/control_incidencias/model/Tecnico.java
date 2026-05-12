package com.example.control_incidencias.model;

public class Tecnico {
    private Long id;
    private String nombre;
    private boolean activo;


    public Tecnico(Long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
        this.activo = true;
    }

    public Long getId() {
        return id;
    }

    public boolean isActivo() {
        return activo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void activarTecnico() {
        this.activo = true;
    }

    public void desactivarTecnico() {
        this.activo = false;
    }

}
