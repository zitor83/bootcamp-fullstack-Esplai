package com.bootcamp.back04;

import java.util.Scanner;

public class ValidadorEntradaEvento {
    public static void main(String[] args) {
        String nombre = "";
        int edad = 0;
        String tipoEntrada = "";

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese su nombre: ");
        nombre = sc.nextLine();
        System.out.println("Ingrese su edad: ");
        edad = sc.nextInt();
        sc.nextLine();
        System.out.println("¿Cual es tu tipo de entrada de estas 3 opciones?");
        System.out.println("GENERAL");
        System.out.println("VIP");
        System.out.println("PREMIUM");
        tipoEntrada = sc.nextLine();

        if (!validarEntrada(nombre, edad, tipoEntrada)) {
            System.out.println("Entrada no válida");
            System.out.println("Revisa los datos introducidos.");
        } else {
            System.out.println("Entrada válida");
            System.out.println("Asistente: " + nombre);
            System.out.println("Edad: " + edad);
            System.out.println("Tipo de entrada: " + tipoEntrada);
        }

    }

    public static boolean validarEntrada(String nombre, int edad, String tipoEntrada) {
        if (nombre.isBlank() || edad < 18
                || !tipoEntrada.equalsIgnoreCase("GENERAL") && !tipoEntrada.equalsIgnoreCase("VIP")
                        && !tipoEntrada.equalsIgnoreCase("PREMIUM")) {
            return false;
        }
        return true;
    }

}
