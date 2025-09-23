package exercicio7;

public class Main {
    public static void main(String[] args) {
        IRepository<Produto, Integer> repoProdutos = new InMemoryRepository<>();
        repoProdutos.salvar(new Produto(1, "Notebook"));
        repoProdutos.salvar(new Produto(2, "Mouse"));

        repoProdutos.listarTodos().forEach(p ->
                System.out.println("Produto: " + p.getNome())
        );

        IRepository<Funcionario, Long> repoFuncionarios = new InMemoryRepository<>();
        repoFuncionarios.salvar(new Funcionario(1L, "Ana"));
        repoFuncionarios.salvar(new Funcionario(2L, "Carlos"));

        repoFuncionarios.listarTodos().forEach(f ->
                System.out.println("Funcionario: " + f.getNome())
        );
    }
}
