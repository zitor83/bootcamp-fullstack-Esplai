package com.bootcamp.sheet02.ejercicio01;

public class Curso {
    private String titulo;
    private int duracionHoras;
    private double precio;
    private boolean activo;

    public Curso(String titulo, int duracionHoras, double precio) {
        if (titulo == null || titulo.isBlank()) {
            titulo = "Sin título";
        }
        this.titulo = titulo;
        if (duracionHoras <= 0) {
            duracionHoras = 1;
        }
        this.duracionHoras = duracionHoras;
        if (precio < 0) {
            precio = 0;
        }
        this.precio = precio;
        this.activo = true;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        if (titulo == null || titulo.isBlank()) {
            titulo = "Sin título";
        }
        this.titulo = titulo;
    }

    public int getDuracionHoras() {
        return duracionHoras;
    }

    public void setDuracionHoras(int duracionHoras) {
        if (duracionHoras <= 0) {
            duracionHoras = 1;
        }
        this.duracionHoras = duracionHoras;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        if (precio < 0) {
            precio = 0;
        }
        this.precio = precio;
    }

  
    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public boolean desactivar() {
        this.activo = false;
        return !activo;
    }

    public boolean esIntensivo() {
        return duracionHoras < 10;
    }

    @Override
    public String toString() {
        return "Curso [titulo=" + titulo + ", duracionHoras=" + duracionHoras + ", precio=" + precio + ", activo="
                + activo + "]";
    }

}
