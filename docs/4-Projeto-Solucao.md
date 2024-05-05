## 4. Projeto da Solução

<span style="color:red">Pré-requisitos: <a href="03-Modelagem do Processo de Negocio.md"> Modelagem do Processo de Negocio</a></span>

## 4.1. Arquitetura da solução

**Arquitetura Full-Stack com React, Node.Js, PostgreSQL e Prisma**

A arquitetura deste projeto full-stack é baseada em tecnologias modernas e eficientes para criar uma aplicação web robusta e escalável. Desde o frontend até o backend, cada camada desempenha um papel fundamental na entrega de uma experiência de usuário dinâmica e responsiva.

**Frontend (Cliente):**
No lado do cliente, utilizamos o framework React, conhecido por sua flexibilidade e reatividade na construção de interfaces de usuário interativas. Para o gerenciamento do estado da aplicação, empregamos o Redux, permitindo um controle centralizado e previsível do estado da aplicação.
A biblioteca Axios é empregada para realizar requisições HTTP ao backend de forma eficiente e assíncrona, garantindo uma comunicação fluida entre o cliente e o servidor.

**Backend (Servidor):**
No lado do servidor, adotamos o ambiente de execução Node.js juntamente com o framework Express.js, que proporciona uma abordagem minimalista e robusta para a criação de APIs RESTful. Para o acesso e manipulação dos dados no banco de dados PostgreSQL, integramos o ORM Prisma. O Prisma oferece uma camada de abstração poderosa sobre o banco de dados, permitindo que operações CRUD sejam realizadas de forma simplificada e segura.

**Banco de Dados:**
O PostgreSQL foi escolhido como sistema de gerenciamento de banco de dados relacional devido à sua robustez, escalabilidade e suporte avançado para transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade)

 **Diagrama de Arquitetura**:

![Diagrama arquitetura software Yourgym drawio](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/121045908/3a0a572d-ccb2-40bc-8694-7cebb5818a5e)


### 4.2. Protótipos de telas

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).
Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a>.
A partir das atividades de usuário identificadas na seção anterior, elabore o protótipo de tela de cada uma delas.

![PAGINA DE NOTIFICAÇÕES](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/914121b0-2b27-488e-9fd4-34acec9148f9)
![DASHBOARD INFORMAÇÕES DE TREINO](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/7d26d90f-b2c0-4d7f-a6d0-e22e540e3c2e)
![DASHBOARD INFORMAÇÕES ACADEMIA](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/7b618e5f-f61d-44cc-b990-8647d9edc15a)
![DASHBOARD ALUNO](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/521ae78a-d56d-422d-8353-cbef05d0da2b)
![PAGINA DE CADASTRO](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/388217ba-d4f3-4c96-a118-867e79466a08)
![Untitled](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/3b0c18b4-7cac-486e-8871-80d80d011fd6)
![DASHBOARD INFORMAÇÕES ALUNO](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/141431894/34a9fd3f-9075-46c4-9284-ec9f2214702e)


São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)


### 4.3. Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam efetuar os cadastros de dados e controles associados aos processos identificados, assim como recuperações.
Utilizando a notação do DER (Diagrama Entidade e Relacionamento), elaborem um modelo, na ferramenta visual indicada na disciplina, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar, também, o controle de acesso de usuários (partes interessadas dos processos) de acordo com os papéis definidos nos modelos do processo de negócio.
_Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos._

#### 4.3.1 Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

#### 4.3.2 Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

![Exemplo de um modelo relacional](images/modeloRelacional.png "Exemplo de Modelo Relacional.")
---


#### 4.3.3 Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.




### 4.4. Tecnologias

**Linguagem:** 
- Typescript

**Serviços web:**
- Aws
- GitHub
- Figma
  
**Frameworks:**
- React

**Bibliotecas:**
- Axios
- Material-UI
- Redux
- React Router
- Node.js
- Express.js
- Prisma
- ESLint
- Prettier
- React-hook-form
- Jest

**IDEs de desenvolvimento:**
- Visual Studio Code

**Ferramentas:**
- Insomnia

| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| SGBD           | Postgresql      |
| Front end      | React +  MUI    |
| Back end       | Node + Express  |
| Deploy         | Github Pages    |

