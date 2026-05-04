package com.bootcamp.back04;

public class ResumenProducto {
    public static void main(String[] args) {
        String nombre = "";
        double precio= 0.0;
        Long stock = 0L;
        Boolean activo = false;
        String categoria = "";

        final double IVA = 0.21;
        
        nombre = "Teclado mecánico";
        categoria="Tecnología";
        precio = 79.99;
        stock = 15L;

        double PrecioConIVA = precio * (1 + IVA);
        double costoTotalSinIVA = precio * stock;
        double costoTotalConIVA = costoTotalSinIVA * (1 + IVA);


        System.out.println("Producto: " + nombre);
        System.out.println("Categotia: " + categoria);
        System.out.println("Precio sin IVA: " + precio);
        System.out.println("Precio con IVA: " + PrecioConIVA);
        System.out.println("Stock: " + stock);
        System.out.println("Costo total sin IVA: " + costoTotalSinIVA);
        System.out.println("Costo total con IVA: " + costoTotalConIVA);
        System.out.println("Activo: " + activo);
    }

}
