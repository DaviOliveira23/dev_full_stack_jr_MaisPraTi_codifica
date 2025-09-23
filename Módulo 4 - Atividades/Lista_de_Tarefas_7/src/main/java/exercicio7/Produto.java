package exercicio7;

public class Produto implements Identificavel<Integer> {
    private final Integer id;
    private final String nome;

    public Produto(Integer id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }
}
