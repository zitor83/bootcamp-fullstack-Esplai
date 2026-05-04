package com.bootcamp.back04;

public class AnalisisNotas {
    public static void main(String[] args) {
        int[] notas = { 7, 4, 9, 6, 5 };

        System.out.println("Mostrar todas las notas:");
        for (int nota : notas) {
            System.out.println("Nota: " + nota);
        }

        System.out.println("Media de las notas: " + calcularMedia(notas));
        System.out.println("Nota más alta: " + mostrarNotaMasAlta(notas));
        System.out.println("Nota más baja: " + mostrarNotaMasBaja(notas));
        System.out.println("Número de notas aprobadas: " + contarNotasAprobadas(notas));
        System.out.println("Número de notas suspensas: " + contarNotasSuspensas(notas));
    }

    private static double calcularMedia(int[] notas) {
        int suma = 0;
        for (int nota : notas) {
            suma += nota;
        }
        return (double) suma / notas.length;
    }

    private static int mostrarNotaMasAlta(int[] notas) {
        int notaMasAlta = notas[0];
        for (int nota : notas) {
            if (nota > notaMasAlta) {
                notaMasAlta = nota;
            }
        }
        return notaMasAlta;
    }

    private static int mostrarNotaMasBaja(int[] notas) {
        int notaMasBaja = notas[0];
        for (int nota : notas) {
            if (nota < notaMasBaja) {
                notaMasBaja = nota;
            }
        }
        return notaMasBaja;
    }

    private static int contarNotasAprobadas(int[] notas) {
        int contadorAprobados = 0;
        for (int nota : notas) {
            if (nota >= 5) {
                contadorAprobados++;
            }
        }
        return contadorAprobados;
    }

    private static int contarNotasSuspensas(int[] notas) {
        int contadorSuspensos = 0;
        for (int nota : notas) {
            if (nota < 5) {
                contadorSuspensos++;
            }
        }
        return contadorSuspensos;
    }
}
