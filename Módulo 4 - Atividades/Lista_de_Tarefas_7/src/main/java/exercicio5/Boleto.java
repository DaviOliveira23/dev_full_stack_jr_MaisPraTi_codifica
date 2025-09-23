package exercicio5;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    @Override
    public void validarPagamento(String codigo) {
        if (codigo == null || !codigo.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Boleto inválido");
        }
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        System.out.println("Pagamento de R$" + valor + " realizado via Boleto");
    }
}
