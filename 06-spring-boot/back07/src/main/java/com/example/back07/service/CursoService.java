package com.example.back07.service;

import com.example.back07.model.Curso;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CursoService {
    private final List<Curso> cursos = new ArrayList<>();

    public CursoService() {
        cursos.add(new Curso(1L,"Java",80,199.9));
        cursos.add(new Curso(2L,"Spring Boot",90,239.9));
        cursos.add(new Curso(3L,"SQL",40,99.9));
    }
    public List<Curso> listarTodos(){
        return cursos;
    }

    public List<Curso> listarActivos(){

        return cursos.stream()
                .filter(Curso::isActivo)
                .toList();
    }
    public Optional<Curso> buscarPorId(Long id){
        return cursos.stream()
                .filter(curso -> curso.getId().equals(id))
                .findFirst();


        }

        public Curso crearCurso(Curso curso){
            cursos.add(curso);
            return cursos.getLast();
        }
    }
