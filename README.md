
# Documentos

Pacote para validação e geração automatizada de documentos, utilizando um conjunto de regras predefinidas.

## Objetivo

Este projeto visa simplificar e automatizar os processos de validação e criação de documentos, considerando um conjunto de regras específicas de formação. Entre as funcionalidades estão a validação de registros básicos (como campos obrigatórios) e a geração de dígitos de verificação (como os usados em códigos de localização). O pacote oferece suporte a diferentes tipos de documentos.

## Instalação

Para utilizar este pacote em seu projeto, basta instalá-lo via npm:

```sh
npm install documentos
```

## Como Usar?

Após a instalação, você pode incluir o pacote em seu código da seguinte forma:

```js
const { DocumentosEnum, Documentos } = require("documentos");
```

## Funções

### Validação de Documentos

Você pode validar diferentes tipos de documentos com o método `validar`. A seguir estão exemplos de como validar o CPF e o CNPJ:

#### Validar CPF

```js
const cpfValido = Documentos.validar(DocumentosEnum.CPF, '12345678909');
console.log(cpfValido); // Retorna true ou false dependendo do documento
```

#### Validar CNPJ

```js
const cnpjValido = Documentos.validar(DocumentosEnum.CNPJ, '12345678000199');
console.log(cnpjValido); // Retorna true ou false dependendo do documento
```

### Geração de Documentos

Você também pode gerar documentos utilizando o método `gerar`, fornecendo os metadados necessários para cada tipo de documento.

#### Gerar CPF

```js
const metadadosCPF = {
    baseInscricao: '12345678',
    regiaoFiscal: 1
};

const cpfGerado = Documentos.gerar(DocumentosEnum.CPF, metadadosCPF);
console.log(cpfGerado); // Retorna o CPF gerado
```

#### Gerar CNPJ

```js
const metadadosCNPJ = {
    baseInscricao: '12345678',
    numeroDaEmpresa: 1234
};

const cnpjGerado = Documentos.gerar(DocumentosEnum.CNPJ, metadadosCNPJ);
console.log(cnpjGerado); // Retorna o CNPJ gerado
```

## Notas Importantes

- **Metadados Opcionais**: A utilização dos metadados é opcional. Dependendo do tipo de documento e da implementação, pode não ser necessário fornecer todos os dados para gerar o documento. Vale-se ressaltar que a baseInscricao uma vez informado, deve obrigatóriamente ser de 8 caractéres, sendo estes apenas números.

## Tipos de Documentos Suportados

Atualmente, o pacote oferece suporte para os seguintes tipos de documentos:

- **CPF**
- **CNPJ**
