package exercicio4;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<IMeioTransporte> transportes = Arrays.asList(
                new Carro(),
                new Bicicleta(),
                new Trem()
        );

        for (IMeioTransporte t : transportes) {
            t.acelerar(20);
            System.out.println(t.getClass().getSimpleName() + " velocidade: " + t.getVelocidade());
            t.frear(10);
            System.out.println("Após frear: " + t.getVelocidade());
        }
    }
}
