import { MetadadosDocumentoGenerico } from "./metadados-documento-cpf-cnpj";

export type MetadadosDocumentoCNPJ = MetadadosDocumentoGenerico & {
  numeroDaEmpresa?: number;
};
