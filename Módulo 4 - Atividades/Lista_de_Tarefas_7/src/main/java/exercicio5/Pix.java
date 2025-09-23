package exercicio5;

import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    @Override
    public void validarPagamento(String chave) {
        if (chave == null || chave.isBlank()) {
            throw new PagamentoInvalidoException("Chave Pix inválida");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via Pix");
    }
}
