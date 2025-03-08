import { MetadadosDocumento } from "../core/types/metadados-documento";
import { DocumentosEnum } from "./enums/documentos-enum";
import { DocumentoBaseFactory } from "./factories/documentos-services-factory";

export class Documentos {
  public static validar(
    tipoDocumento: DocumentosEnum,
    documento: string
  ): boolean {
    return DocumentoBaseFactory.createService(tipoDocumento).validar(documento);
  }

  public static gerar(
    tipoDocumento: DocumentosEnum,
    rules?: MetadadosDocumento
  ): string {
    return DocumentoBaseFactory.createService(tipoDocumento).gerar(rules);
  }
}
