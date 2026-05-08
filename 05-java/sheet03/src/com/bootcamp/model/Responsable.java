package com.bootcamp.model;

public class Responsable {

    private long id;
    private String nombre;

    public Responsable(long id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    public String toString() {
        return "Responsable ID:" + id + ", nombre=" + nombre + "]";
    }

}
