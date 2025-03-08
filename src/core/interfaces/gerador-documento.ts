export interface GeradorDocumento<MetadadosDocumento> {
  gerar(rules?: MetadadosDocumento): string;
}
