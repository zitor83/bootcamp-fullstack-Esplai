package com.bootcamp.sheet02.ejercicio03;

public class Producto {
    private String nombre;
    private double precio;
    private int stock;
    private boolean activo;

    public Producto(String nombre, double precio, int stock) {
        if (nombre == null || nombre.isBlank()) {
            nombre = "Sin nombre";
        }
        if (precio < 0) {
            precio = 0;
        }
        if (stock < 0) {
            stock = 0;
        }
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.activo = true;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public int getStock() {
        return stock;
    }

    public boolean isActivo() {
        return activo;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    

    public boolean tieneStock() {
        return stock > 0;
    }

    public int reducirStock(int cantidad) {
        if (cantidad < 0) {
            return stock;
        }
        if (cantidad > stock) {
            stock = 0;
        } else {
            stock -= cantidad;
        }
        return stock;
    }

    public int aumentarStock(int cantidad) {
        if (cantidad < 0) {
            return stock;
        }
        stock += cantidad;
        return stock;
    }

    public double calcularValorInventario() {
        return precio * stock;
    }

    public void desactivar() {
        activo = false;
    }

    @Override
    public String toString() {
        return "Producto [nombre=" + nombre + ", precio=" + precio + ", stock=" + stock + ", activo=" + activo + "]";
    }

}
