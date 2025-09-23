package exercicio5;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FormaPagamento cartao = new CartaoCredito();
        FormaPagamento boleto = new Boleto();
        FormaPagamento pix = new Pix();

        try {
            cartao.validarPagamento("1234567890123456");
            cartao.processarPagamento(new BigDecimal("150.00"));

            boleto.validarPagamento("12345678901234567890123456789012345678901234567");
            boleto.processarPagamento(new BigDecimal("200.00"));

            pix.validarPagamento("email@pix.com");
            pix.processarPagamento(new BigDecimal("75.50"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}
