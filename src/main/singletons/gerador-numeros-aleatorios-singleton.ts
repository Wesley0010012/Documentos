import { GeradorNumerosAleatorios } from "@/core/interfaces/gerador-numeros-aleatorios";
import { MathGeradorNumerosAleatorios } from "@/infra/gerador-numeros-aleatorios/math-gerador-numeros-aleatorios";

export abstract class GeradorDocumentoAleatoriosSigleton {
  static instance: MathGeradorNumerosAleatorios | undefined;

  static create(): GeradorNumerosAleatorios {
    if (!this.instance) {
      this.instance = new MathGeradorNumerosAleatorios();
    }

    return this.instance;
  }
}
