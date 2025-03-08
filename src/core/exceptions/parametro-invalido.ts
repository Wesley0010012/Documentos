import { ExcecaoCustomizada } from "./excecao-customizada";

export class ParametroInvalido extends ExcecaoCustomizada {
  public constructor(parametro: string) {
    super("parâmetro inválido: " + parametro, "ParametroInvalido");
  }
}
