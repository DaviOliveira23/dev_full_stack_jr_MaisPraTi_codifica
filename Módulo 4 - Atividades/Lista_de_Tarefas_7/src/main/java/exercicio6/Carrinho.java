package exercicio6;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionar(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(item);
        return new Carrinho(novaLista);
    }

    public Carrinho remover(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.remove(item);
        return new Carrinho(novaLista);
    }

    public Carrinho aplicarCupom(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 30) {
            throw new IllegalArgumentException("Cupom inválido (máx. 30%)");
        }

        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            BigDecimal valorOriginal = item.getProduto().getPreco().getValor();
            BigDecimal desconto = valorOriginal.multiply(BigDecimal.valueOf(porcentagem / 100));
            BigDecimal novoValor = valorOriginal.subtract(desconto).setScale(2, RoundingMode.HALF_EVEN);

            Produto novoProduto = new Produto(
                    item.getProduto().getNome(),
                    new Dinheiro(novoValor, item.getProduto().getPreco().getMoeda())
            );

            novaLista.add(new ItemCarrinho(novoProduto, item.getQuantidade()));
        }

        return new Carrinho(novaLista);
    }
}
