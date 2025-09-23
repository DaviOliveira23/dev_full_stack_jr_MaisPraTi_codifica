package exercicio8;

import java.math.BigDecimal;

public class Pedido {
    private final String cep;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cep, CalculadoraFrete estrategiaFrete) {
        this.cep = cep;
        this.estrategiaFrete = estrategiaFrete;
    }

    public String getCep() {
        return cep;
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }
}
