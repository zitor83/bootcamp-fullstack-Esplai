package com.bootcamp.back04;

import java.util.Scanner;

public class ControlProductos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("¿Cuantos productos quieres ingresar?");
        int cantidad = scanner.nextInt();
        scanner.nextLine();

        String[] nombres = new String[cantidad];
        double[] precios = new double[cantidad];
        int[] stocks = new int[cantidad];
        String[] estados = new String[cantidad];

        for (int i = 0; i < cantidad; i++) {
            System.out.println("Registro del producto " + (i + 1) + ":");
            do {
                System.out.println("Ingrese el nombre del producto: ");
                nombres[i] = scanner.nextLine();
                if (nombres[i].isBlank()) {
                    System.out.println(
                            "El nombre del producto no puede estar vacío. Por favor, ingrese un nombre válido.");
                }
            } while (nombres[i].isBlank());

            do {
                System.out.println("Ingrese el precio del producto: ");
                precios[i] = scanner.nextDouble();
                if (precios[i] < 0) {
                    System.out.println(
                            "El precio del producto no puede ser negativo. Por favor, ingrese un precio válido.");
                }
            } while (precios[i] < 0);
            scanner.nextLine();
            do {
                System.out.println("Ingrese el stock del producto: ");
                stocks[i] = scanner.nextInt();
                if (stocks[i] < 0) {
                    System.out.println(
                            "El stock del producto no puede ser negativo. Por favor, ingrese un stock válido.");
                }
            } while (stocks[i] < 0);
            scanner.nextLine();
            boolean estadoValido = false;
            do {
                System.out.println("Ingrese el estado del producto (ACTIVO/INACTIVO): ");
                estados[i] = scanner.nextLine().toUpperCase();
                estadoValido = estados[i].equalsIgnoreCase("ACTIVO") || estados[i].equalsIgnoreCase("INACTIVO");
                if (!estadoValido) {
                    System.out.println(
                            "El estado del producto debe ser ACTIVO o INACTIVO. Por favor, ingrese un estado válido.");
                }
            } while (!estadoValido);
        }

        scanner.close();

        mostrarProductos(nombres, precios, stocks, estados);

        System.out.println("Resumen de productos:");
        System.out.println("Valor total del inventario: " + calcularValorTotalInventario(precios, stocks));
        System.out.println("Número de productos con stock cero: " + contarProductosStockCero(stocks));
        System.out.println("Número de productos activos: " + contarProductosActivos(estados));

    }

    public static void mostrarProductos(String[] nombres, double[] precios, int[] stocks, String[] estados) {
        System.out.println("Listado de productos:");
        for (int i = 0; i < nombres.length; i++) {
            System.out.println("Producto " + (i + 1) + ":");
            System.out.println("Nombre: " + nombres[i]);
            System.out.println("Precio: " + precios[i]);
            System.out.println("Stock: " + stocks[i]);
            System.out.println("Estado: " + estados[i]);
            System.out.println();
        }

    }

    public static double calcularValorTotalInventario(double[] precios, int[] stocks) {
        double valorTotal = 0;
        for (int i = 0; i < precios.length; i++) {
            valorTotal += precios[i] * stocks[i];
        }
        return valorTotal;
    }

    public static int contarProductosStockCero(int[] stocks) {
        int contador = 0;
        for (int stock : stocks) {
            if (stock == 0) {
                contador++;
            }
        }
        return contador;
    }

    public static int contarProductosActivos(String[] estados) {
        int contador = 0;
        for (String estado : estados) {
            if (estado.equalsIgnoreCase("ACTIVO")) {
                contador++;
            }
        }
        return contador;
    }
}
