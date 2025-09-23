package exercicio7;

import java.util.*;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> banco = new HashMap<>();

    @Override
    public void salvar(T entidade) {
        banco.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(banco.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return List.copyOf(banco.values()); // lista imutável
    }

    @Override
    public void remover(ID id) {
        if (!banco.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada");
        }
        banco.remove(id);
    }
}
