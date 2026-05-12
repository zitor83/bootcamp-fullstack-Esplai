package com.example.back07.controller;

import com.example.back07.dto.CrearCursoRequestDto;
import com.example.back07.model.Curso;
import com.example.back07.service.CursoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursosController {
    private final CursoService cursoService;

    public CursosController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping
    public List<Curso> listarCursos(){

      return cursoService.listarTodos();

    }

    @GetMapping("/{id}")
    public ResponseEntity<Curso> obtenerCursoPorId(@PathVariable Long id){
        return cursoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Curso crearCursoPost(@RequestBody CrearCursoRequestDto curso){
        return cursoService.crearCurso();



    }
}
