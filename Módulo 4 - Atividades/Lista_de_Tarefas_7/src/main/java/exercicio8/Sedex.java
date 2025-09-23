package exercicio8;

import java.math.BigDecimal;

public class Sedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        if (!pedido.getCep().matches("\\d{8}")) {
            throw new IllegalArgumentException("CEP inválido");
        }
        return BigDecimal.valueOf(30.0);
    }
}
