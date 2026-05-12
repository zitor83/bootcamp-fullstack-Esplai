package com.example.control_incidencias.controller;


import com.example.control_incidencias.dto.IncidenciaRequestDTO;
import com.example.control_incidencias.dto.IncidenciaResponseDTO;
import com.example.control_incidencias.model.Estado;
import com.example.control_incidencias.model.Prioridad;
import com.example.control_incidencias.model.Tecnico;
import com.example.control_incidencias.service.IncidenciaService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/incidencias")
public class IncidenciasController {
    private final IncidenciaService incidenciaService;

    public IncidenciasController(IncidenciaService incidenciaService) {
        this.incidenciaService = incidenciaService;
    }

    @GetMapping
    public List<IncidenciaResponseDTO> getIncidencias() {
        return incidenciaService.listarTodasIncidencias();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IncidenciaResponseDTO> getIncidenciaById(@PathVariable Long id) {
        return ResponseEntity.ok(incidenciaService.buscarIncidenciaPorId(id));
    }

    @GetMapping("/abiertas")
    public List<IncidenciaResponseDTO> getIncidenciasAbiertas() {
        return incidenciaService.listarIncidenciasAbiertas();
    }

    @PostMapping
    public IncidenciaResponseDTO createIncidencia(@Valid @RequestBody IncidenciaRequestDTO incidenciaDto) {
        return incidenciaService.registrarIncidencia(incidenciaDto);
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<IncidenciaResponseDTO> actualizarEstado(@PathVariable Long id, @RequestParam Estado nuevoEstado) {
        return incidenciaService.cambiarEstado(id, nuevoEstado)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/prioridad")
    public ResponseEntity<IncidenciaResponseDTO> actualizarPrioridad(@PathVariable Long id, @RequestParam Prioridad nuevoPrioridad) {
        return incidenciaService.cambiarPrioridad(id, nuevoPrioridad)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/asignar")
    public ResponseEntity<IncidenciaResponseDTO> asignarTecnico(@PathVariable Long id, @RequestBody Tecnico nuevoTecnico) {
        return incidenciaService.asignarTecnico(id, nuevoTecnico)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{/id}")
    public ResponseEntity<Void> deleteIncidencia(@PathVariable Long id) {
        return incidenciaService.eliminarIncidenciaPorId(id)
                .map(incidenciaDto -> ResponseEntity.noContent().<Void>build())
                .orElse(ResponseEntity.notFound().build());
    }


}
