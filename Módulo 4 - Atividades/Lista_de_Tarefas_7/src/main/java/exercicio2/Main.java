package exercicio2;

public class Main {
    public static void main(String[] args) {
        ProdutoComDesconto p = new ProdutoComDesconto("Camiseta", 100, 10);

        System.out.println("Preço original: " + p.getPreco());
        p.aplicarDesconto(20);
        System.out.println("Preço com desconto: " + p.getPreco());

        try {
            p.aplicarDesconto(70);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
