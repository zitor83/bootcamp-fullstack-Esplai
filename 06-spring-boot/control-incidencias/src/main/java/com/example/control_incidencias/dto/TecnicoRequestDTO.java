package com.example.control_incidencias.dto;

import jakarta.validation.constraints.NotBlank;

public class TecnicoRequestDTO {

    @NotBlank(message = "El nombre del técnico es obligatorio")
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}