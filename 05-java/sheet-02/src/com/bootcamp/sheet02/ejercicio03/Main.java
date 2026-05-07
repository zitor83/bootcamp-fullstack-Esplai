package com.bootcamp.sheet03.ejercicio03;

public class Main {
    public static void main(String[] args) {
        Producto teclado = new Producto("Teclado", 79.99, 10);
        System.out.println(teclado.tieneStock()); // true
        teclado.reducirStock(3);
        System.out.println(teclado.getStock()); // 7
        System.out.println(teclado.calcularValorInventario());
    }
}
