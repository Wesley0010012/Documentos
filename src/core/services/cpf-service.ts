import { ParametroInvalido } from "../exceptions/parametro-invalido";
import { CPF } from "../interfaces/CPF";
import { GeradorNumerosAleatorios } from "../interfaces/gerador-numeros-aleatorios";
import { MetadadosDocumentoCPF } from "../types/metadados-documento-cpf";
import { CPFCNPJService } from "./cpf-cnpj-service";

export class CPFService extends CPFCNPJService implements CPF {
  private static TAMANHO_DOCUMENTO: number = 11;

  public constructor(
    readonly geradorNumerosAleatorios: GeradorNumerosAleatorios
  ) {
    super(geradorNumerosAleatorios, CPFService.TAMANHO_DOCUMENTO);
  }

  gerar(rules?: MetadadosDocumentoCPF | undefined): string {
    let baseInscricao =
      (this.validarBaseInscricao(rules?.baseInscricao) ??
        this.gerarBaseInscricao()) +
      (this.validarRegiaoFiscal(rules?.regiaoFiscal) ??
        this.gerarCodigoRegiaoFiscal());

    baseInscricao += this.calcularDigitoVerificador(baseInscricao);

    return (baseInscricao += this.calcularDigitoVerificador(baseInscricao));
  }

  private validarRegiaoFiscal(regiaoFiscal?: number): number | undefined {
    if (regiaoFiscal && (regiaoFiscal < 0 || regiaoFiscal > 9)) {
      throw new ParametroInvalido("Região Fiscal");
    }

    return regiaoFiscal;
  }

  private gerarCodigoRegiaoFiscal(): number {
    return this.geradorNumerosAleatorios.gerar(0, 9);
  }
}
