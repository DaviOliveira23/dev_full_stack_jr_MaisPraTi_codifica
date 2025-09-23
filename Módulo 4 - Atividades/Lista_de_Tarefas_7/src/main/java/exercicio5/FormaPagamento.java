package exercicio5;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento(String dados) throws PagamentoInvalidoException;
    public abstract void processarPagamento(BigDecimal valor);
}
