/* Codigo sin usar collections, con arrays y sin nulls

package com.bootcamp.repository;

import com.bootcamp.model.Responsable;

public class ResponsableRepository {
    private Responsable[] responsables;
    private int contador;

    public ResponsableRepository(int capacidad) {
        this.responsables = new Responsable[capacidad];
        this.contador = 0;
    }

    public void agregarResponsable(Responsable responsable) {
        if (contador < responsables.length) {
            responsables[contador] = responsable;
            contador++;
        } else {
            System.out.println("No se pueden agregar más responsables. Capacidad máxima alcanzada.");
        }
    }

    public Responsable obtenerResponsablePorId(long id) {
        for (Responsable responsable : responsables) {
            if (responsable != null && responsable.getId() == id) {
                return responsable;
            }
        }
        return null;
    }

    public Responsable[] obtenerTodosLosResponsables() {
        Responsable[] resultadoResponsables = new Responsable[contador];
        for (int i = 0; i < contador; i++) {
            resultadoResponsables[i] = responsables[i];
        }
        return resultadoResponsables;
    }

}

 */

package com.bootcamp.repository;

import com.bootcamp.model.Responsable;
import java.util.ArrayList;
import java.util.List;

public class ResponsableRepository {

    private List<Responsable> responsables;

    public ResponsableRepository() {
        this.responsables = new ArrayList<>();
    }

    public void agregarResponsable(Responsable responsable) {
        responsables.add(responsable);
    }

    public Responsable obtenerResponsablePorId(long id) {
        return responsables.stream()
                .filter(responsable -> responsable.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public List<Responsable> obtenerTodosLosResponsables() {
        return responsables;
    }
}
