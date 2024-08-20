# Star Store

StartStore é uma loja Star Wars", oferecendo uma experiência completa de compra de produtos. Os usuários poderão visualizar uma variedade de itens relacionados a Star Wars, adicionar produtos ao carrinho, ajustar quantidades e remover itens facilmente. A finalização da compra é simples, com a opção de armazenar informações de pagamento na carteira do aplicativo. Além disso, o histórico de compras estará disponível para facilitar o gerenciamento das transações.


## 🛠️ Construído com

As técnicas e tecnologias utilizadas no projeto são:

* [React Native](https://reactnative.dev/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
* [Expo](https://docs.expo.dev/) - Tecnologia para simplificar o ambiente de desenvolvimento
* [TypeScript](https://www.typescriptlang.org/) - Estende JavaScript adicionando definições de tipo. Novos projetos React Native têm como alvo TypeScript por padrão, mas também oferecem suporte a JavaScript e Flow.
* [react-hook-form](https://react-hook-form.com/) - Biblioteca para gerenciamento de formulários em aplicativos
* [yup](https://www.npmjs.com/package/yup) - Biblioteca JavaScript que é amplamente utilizada para validação de esquemas de dados em aplicativos JavaScript e TypeScript
* [Zustand](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado global
* [Styled-Components](https://styled-components.com/) - Biblioteca para criação de componentes estilizados utilizando uma abordagem baseada em CSS-in-JS
* [styled-system](https://github.com/styled-system/styled-system/blob/master/docs/getting-started.md) - Biblioteca para criação de componentes para criar componentes estilizados de maneira eficiente e consistente
* [Axios](https://axios-http.com/ptbr/docs/intro) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
* [Babel](https://babeljs.io/) - O Babel é um compilador JavaScript gratuito e de código aberto e transpiler configurável usado no desenvolvimento de aplicações JavaScript;

### Design Systems
  * [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) - É uma metodologia focada na construção de interfaces de usuário (UI) de forma sistemática e modular. Ela organiza componentes de UI em uma hierarquia (átomos, moléculas, organismos, templates e páginas), que facilita a criação de interfaces consistentes e escaláveis.

### Design pattern
  * [Composition Pattern](https://refactoring.guru/design-patterns/composite) -  Padrão de design de software que se concentra na composição de objetos para construir sistemas flexíveis e reutilizáveis.

### API
  * [Repositório da api](https://github.com/carolngr/star-store-api) -  Desenvolvida em Node.js e Express para comunicação com o app.  


## 📲 Executando o projeto

### ✔️ Pré-requisitos

Para conseguir seguir este README e rodar o projeto você pode precisar dos seguintes itens:
- Git para clonar o projeto e acessar as branches. Você pode instalar [aqui](https://git-scm.com/downloads);
- Node para podermos rodar `expo` e `yarn`. Você pode instala-lo [aqui](https://nodejs.org/en/);
- Um celular Android ou iOS com o aplicativo Expo instalado, ou então algum simulador Android ou iOS no computador;

- Conexão com a api: [Repositória da criação da api](https://github.com/carolngr/star-store-api)
  - usuário de teste: email: startstore@gmail.com senha: lojastartstore

Se quiser testar as instalações, rodar os comandos abaixo separadamente deve mostrar as respectivas versões.

```
git --version
node --version
yarn --version
```

Então com o `npm` instalado podemos instalar o `expo` e checar a versão:
```
yarn install --global expo-cli
expo --version
```

### 🐙 Clonando o projeto

Para ter acesso aos arquivos do projeto você pode clonar usando o seguinte comando:

```
git clone https://github.com/carolngr/star-store.git
```

### ▶️ Rodando o Projeto

Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
```
yarn install
```

Então podemos rodar o projeto:
```
yarn start
```

Caso estiver com o celular, **escaneie o QR code com o aplicativo do Expo** ou a câmera.
Se seu celular estiver em outra rede diferente do computador, troque a "CONNECTION" para "Tunnel", que o app será transmitido via internet.
Se tiver um simulador, clique na opção do sistema operacional do seu simulador no menu esquerdo.

Pronto, agora o app você deve ver o app rodando.
