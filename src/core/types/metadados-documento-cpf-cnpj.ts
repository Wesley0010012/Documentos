import { MetadadosDocumento } from "./metadados-documento";

export type MetadadosDocumentoGenerico = MetadadosDocumento & {
    baseInscricao?: string;
}