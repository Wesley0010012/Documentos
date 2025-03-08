import { MetadadosDocumentoGenerico } from "./metadados-documento-cpf-cnpj";

export type MetadadosDocumentoCPF = MetadadosDocumentoGenerico & {
  regiaoFiscal?: number;
};
