package exercicio1;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Notebook", 3500, 5);
        System.out.println(p1.getNome() + " - R$" + p1.getPreco());

        try {
            p1.setPreco(-100);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
