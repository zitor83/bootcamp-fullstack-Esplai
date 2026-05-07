package com.bootcamp.sheet03.ejercicio01;

public class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Java Básico", 40, 199.99);
        System.out.println("Curso: " + curso1.getTitulo());
        System.out.println("Duración: " + curso1.getDuracionHoras() + " horas");
        System.out.println("Precio: $" + curso1.getPrecio());

        Curso curso2 = new Curso("", -5, -20.0);

        System.out.println(curso1.toString());
        System.out.println(curso2.toString());

    }
}
