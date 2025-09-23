package exercicio6;

import java.math.BigDecimal;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Livro", new Dinheiro(new BigDecimal("50.00"), Moeda.BRL));
        Produto p2 = new Produto("Caneta", new Dinheiro(new BigDecimal("5.00"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(Arrays.asList(
                new ItemCarrinho(p1, 2),
                new ItemCarrinho(p2, 5)
        ));

        System.out.println("Carrinho original:");
        carrinho.getItens().forEach(i ->
                System.out.println(i.getProduto().getNome() + " - R$" + i.getProduto().getPreco().getValor())
        );

        Carrinho comDesconto = carrinho.aplicarCupom(20);

        System.out.println("\nCarrinho com desconto:");
        comDesconto.getItens().forEach(i ->
                System.out.println(i.getProduto().getNome() + " - R$" + i.getProduto().getPreco().getValor())
        );
    }
}
