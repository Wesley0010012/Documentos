import { ParametroInvalido } from "@/core/exceptions/parametro-invalido";
import { CNPJ } from "../interfaces/CNPJ";
import { GeradorNumerosAleatorios } from "../interfaces/gerador-numeros-aleatorios";
import { MetadadosDocumentoCNPJ } from "../types/metadados-documento-cnpj";
import { CPFCNPJService } from "./cpf-cnpj-service";

export class CNPJService extends CPFCNPJService implements CNPJ {
  private static TAMANHO_DOCUMENTO: number = 14;

  public constructor(
    readonly geradorNumerosAleatorios: GeradorNumerosAleatorios
  ) {
    super(geradorNumerosAleatorios, CNPJService.TAMANHO_DOCUMENTO);
  }

  gerar(rules?: MetadadosDocumentoCNPJ | undefined): string {
    let baseInscricao =
      (this.validarBaseInscricao(rules?.baseInscricao) ??
        this.gerarBaseInscricao()) +
      (
        this.validarNumeroEmpresa(rules?.numeroDaEmpresa) ??
        this.gerarNumeroEmpresa()
      )
        .toString()
        .padStart(4, "0");

    baseInscricao += this.calcularDigitoVerificador(baseInscricao);

    return (baseInscricao += this.calcularDigitoVerificador(baseInscricao));
  }

  private validarNumeroEmpresa(numeroDaEmpresa?: number) {
    if (numeroDaEmpresa && (numeroDaEmpresa < 0 || numeroDaEmpresa > 9999)) {
      throw new ParametroInvalido("Número da Empresa");
    }

    return numeroDaEmpresa;
  }

  private gerarNumeroEmpresa(): number {
    return this.geradorNumerosAleatorios.gerar(1, 9999);
  }
}
