package exercicio3;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Funcionario> funcionarios = Arrays.asList(
                new Gerente("Ana", new BigDecimal("10000")),
                new Desenvolvedor("Carlos", new BigDecimal("5000"))
        );

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " bônus: " + f.calcularBonus());
        }
    }
}
