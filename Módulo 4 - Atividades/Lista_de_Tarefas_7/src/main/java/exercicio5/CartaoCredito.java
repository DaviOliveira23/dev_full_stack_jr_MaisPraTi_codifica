package exercicio5;

import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    @Override
    public void validarPagamento(String numeroCartao) {
        if (numeroCartao == null || numeroCartao.length() != 16) {
            throw new PagamentoInvalidoException("Número de cartão inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via Cartão de Crédito");
    }
}
