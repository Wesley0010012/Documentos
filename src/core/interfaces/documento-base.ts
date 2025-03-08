import { MetadadosDocumento } from "../types/metadados-documento";
import { GeradorDocumento } from "./gerador-documento";
import { ValidadorDocumento } from "./validador-documento";

export interface DocumentoBase<T extends MetadadosDocumento>
  extends GeradorDocumento<T>,
    ValidadorDocumento {}
