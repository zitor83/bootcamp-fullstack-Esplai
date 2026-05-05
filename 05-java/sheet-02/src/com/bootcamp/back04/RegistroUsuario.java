package com.bootcamp.back04;
import java.util.Scanner;

public class RegistroUsuario {
public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);
    String nombre="";
    int edad=0;
    String email="";

    System.out.println("Ingrese su nombre:");
    nombre= sc.nextLine();
    System.out.println("Ingrese su edad:");
    edad= sc.nextInt();
    sc.nextLine(); // Limpiar el buffer
    System.out.println("Ingrese su email:");
    email= sc.nextLine();

    System.out.println("Registro de Usuario:");
    System.out.println("Nombre: " + nombre);
    System.out.println("Edad: " + edad);
    System.out.println("Email: " + email);

    sc.close();


    
}
}
