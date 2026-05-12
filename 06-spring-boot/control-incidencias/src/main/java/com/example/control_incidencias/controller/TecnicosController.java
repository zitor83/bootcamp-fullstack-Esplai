package com.example.control_incidencias.controller;

import com.example.control_incidencias.dto.TecnicoRequestDTO;
import com.example.control_incidencias.dto.TecnicoResponseDTO;
import com.example.control_incidencias.service.TecnicoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/tecnicos")
public class TecnicosController {
    private final TecnicoService tecnicoService;

    public TecnicosController(TecnicoService tecnicoService) {

        this.tecnicoService = tecnicoService;
    }

    @GetMapping
    public List<TecnicoResponseDTO> getTecnicos() {
        return tecnicoService.listarTodosTecnicos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TecnicoResponseDTO> getTecnicoPorId(@PathVariable Long id) {
        return ResponseEntity.ok(tecnicoService.buscarTecnicoPorId(id));
    }

    @PostMapping
    public TecnicoResponseDTO createTecnico(@Valid @RequestBody TecnicoRequestDTO tecnicoRequestDTO) {
        return tecnicoService.registrarTecnico(tecnicoRequestDTO);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<TecnicoResponseDTO> actualizarNombreTecnico(
            @PathVariable Long id, @RequestBody String nuevoNombre) {
        return tecnicoService.cambiarNombreTecnico(id, nuevoNombre)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTecnico(@PathVariable Long id) {
        return tecnicoService.eliminarTecnicoPorId(id)
                .map(tecnico -> ResponseEntity.noContent().<Void>build())
                .orElse(ResponseEntity.notFound().build());

    }
}
