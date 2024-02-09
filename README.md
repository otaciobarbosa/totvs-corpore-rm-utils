# Totvs Corpore RM Utils

Este pacote fornece utilitários para auxiliar nas rotinas relacionadas ao Totvs Corpore RM.

## Instalação

Para instalar, você pode usar o npm. Execute o seguinte comando no terminal:

```
npm install totvs-corpore-rm-utils
```

## Utilização

```javascript
import importMovement from 'totvs-corpore-rm-utils';

// Exemplo de dados para serem usados na função importMovement
const dataObject = [
  { CHAPA: "001", EVENTO: "Evento1", VALOR: 100.50 },
  { CHAPA: "002", EVENTO: "Evento2", VALOR: 150.75 },
  // Adicione mais linhas conforme necessário
];

// Chama a função importMovement com o objeto como argumento
importMovement(dataObject);
```

## Módulos Exportados

- **importMovement**: Função para realizar a importação do movimento no Totvs Corpore RM.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta criar uma solicitação pull.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## Autor

Otácio Barbosa

---

**Gostaria de agradecer? Considere apoiar o desenvolvedor:**

[![Apoie no GitHub Sponsors](https://img.shields.io/badge/Apoie%20no%20GitHub%20Sponsors-gray?logo=github&style=flat-square)](https://github.com/sponsors/otaciobarbosa/waitlist)