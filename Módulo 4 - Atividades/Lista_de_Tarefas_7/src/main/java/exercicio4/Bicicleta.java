package exercicio4;

public class Bicicleta implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 40;

    @Override
    public void acelerar(int incremento) {
        if (velocidade + incremento > VELOCIDADE_MAX) {
            throw new IllegalArgumentException("Velocidade máxima da bicicleta atingida");
        }
        velocidade += incremento;
    }

    @Override
    public void frear(int decremento) {
        if (velocidade - decremento < 0) {
            throw new IllegalArgumentException("Bicicleta já está parada");
        }
        velocidade -= decremento;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
