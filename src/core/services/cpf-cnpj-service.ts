import { ParametroInvalido } from "@/core/exceptions/parametro-invalido";
import { GeradorNumerosAleatorios } from "@/core/interfaces/gerador-numeros-aleatorios";
import { ValidadorDocumento } from "@/core/interfaces/validador-documento";

export abstract class CPFCNPJService implements ValidadorDocumento {
  protected readonly tamanhoBaseInscricao: number = 8;

  public constructor(
    protected readonly geradorNumerosAleatorios: GeradorNumerosAleatorios,
    private readonly tamanhoDocumento: number
  ) {}

  protected gerarBaseInscricao(): string {
    return Array.from({ length: this.tamanhoBaseInscricao }, () =>
      this.geradorNumerosAleatorios.gerar(0, 9)
    ).join("");
  }

  protected somarDigitos(documento: string): number {
    const tamanhoDocumento = documento.length + 1;

    return documento.split("").reduce((soma, digito, index) => {
      return soma + Number(digito) * (tamanhoDocumento - index);
    }, 0);
  }

  protected calcularDigitoVerificador(baseDocumento: string): number {
    const restoDivisao =
      this.somarDigitos(baseDocumento) % this.tamanhoDocumento;

    return restoDivisao > 1 ? this.tamanhoDocumento - restoDivisao : 0;
  }

  protected validarBaseInscricao(baseInscricao?: string): string | undefined {
    if (baseInscricao && !this.verificarBaseInscricao(baseInscricao)) {
      throw new ParametroInvalido("Base Inscrição inválida");
    }
    return baseInscricao;
  }

  protected verificarBaseInscricao(baseInscricao: string): boolean {
    return /^\d{8}$/.test(baseInscricao);
  }

  public validar(documento: string): boolean {
    if (documento.length != this.tamanhoDocumento) {
      return false;
    }

    if (!this.verificarBaseInscricao(documento)) {
      return false;
    }

    const baseInscricao = documento.slice(0, -2);

    const [primeiroDigitoVerificador, segundoDigitoVerificador] =
      documento.slice(-2);

    return (
      this.calcularDigitoVerificador(baseInscricao) ===
        +primeiroDigitoVerificador &&
      this.calcularDigitoVerificador(
        baseInscricao + primeiroDigitoVerificador
      ) === +segundoDigitoVerificador
    );
  }
}
