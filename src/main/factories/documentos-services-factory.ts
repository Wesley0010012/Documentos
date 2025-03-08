import { ParametroInvalido } from "@/core/exceptions/parametro-invalido";
import { DocumentoBase } from "@/core/interfaces/documento-base";
import { CNPJService } from "@/core/services/cnpj-service";
import { CPFService } from "@/core/services/cpf-service";
import { MetadadosDocumento } from "@/core/types/metadados-documento";
import { DocumentosEnum } from "@/main/enums/documentos-enum";
import { GeradorDocumentoAleatoriosSigleton } from "@/main/singletons/gerador-numeros-aleatorios-singleton";

export class DocumentoBaseFactory {
  static createService(
    tipoDocumento: DocumentosEnum
  ): DocumentoBase<MetadadosDocumento> {
    const geradorNumeros = GeradorDocumentoAleatoriosSigleton.create();

    switch (tipoDocumento) {
      case DocumentosEnum.CPF:
        return new CPFService(geradorNumeros);
      case DocumentosEnum.CNPJ:
        return new CNPJService(geradorNumeros);
      default:
        throw new ParametroInvalido("Tipo Documento não conhecido");
    }
  }
}
