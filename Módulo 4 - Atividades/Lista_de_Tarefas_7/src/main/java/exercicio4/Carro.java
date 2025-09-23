package exercicio4;

public class Carro implements IMeioTransporte {
    private int velocidade = 0;
    private final int VELOCIDADE_MAX = 200;

    @Override
    public void acelerar(int incremento) {
        if (velocidade + incremento > VELOCIDADE_MAX) {
            throw new IllegalArgumentException("Velocidade máxima do carro atingida");
        }
        velocidade += incremento;
    }

    @Override
    public void frear(int decremento) {
        if (velocidade - decremento < 0) {
            throw new IllegalArgumentException("Carro já está parado");
        }
        velocidade -= decremento;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
