import { GeradorNumerosAleatorios } from "@/core/interfaces/gerador-numeros-aleatorios";

export class MathGeradorNumerosAleatorios implements GeradorNumerosAleatorios {
  gerar(base: number, limite: number): number {
    return Math.floor(Math.random() * (limite - base + 1)) + base;
  }
}
