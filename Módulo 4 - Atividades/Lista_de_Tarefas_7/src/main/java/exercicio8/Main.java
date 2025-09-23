package exercicio8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Pedido pedido = new Pedido("12345678", new Sedex());
        System.out.println("Frete Sedex: " + pedido.calcularFrete());

        pedido.setEstrategiaFrete(new Pac());
        System.out.println("Frete PAC: " + pedido.calcularFrete());

        pedido.setEstrategiaFrete(new RetiradaNaLoja());
        System.out.println("Retirada na loja: " + pedido.calcularFrete());

        pedido.setEstrategiaFrete(p -> {
            BigDecimal valor = new BigDecimal("120");
            return valor.compareTo(new BigDecimal("100")) > 0 ? BigDecimal.ZERO : BigDecimal.valueOf(20);
        });
        System.out.println("Frete com promoção: " + pedido.calcularFrete());
    }
}
