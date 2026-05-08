package com.bootcamp.service;

import com.bootcamp.model.Responsable;
import com.bootcamp.repository.ResponsableRepository;

public class ResponsableService {
    private ResponsableRepository repository;

    public ResponsableService(ResponsableRepository repository) {
        this.repository = repository;
    }

    public void registrarResponsable(Responsable responsable) {
        repository.agregarResponsable(responsable);
        System.out.println("Responsable registrado: " + responsable.getNombre());
    }

    public Responsable buscarPorId(long id) {
        return repository.obtenerResponsablePorId(id);
    }
}