package exercicio7;

public class Funcionario implements Identificavel<Long> {
    private final Long id;
    private final String nome;

    public Funcionario(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
