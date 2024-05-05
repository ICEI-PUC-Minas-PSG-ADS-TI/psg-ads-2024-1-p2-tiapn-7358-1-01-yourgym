# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A superlotação em academias tem impactado negativamente a experiência dos usuários, aumentando o tempo de espera por equipamentos e criando um ambiente estressante. Este projeto se propõe a desenvolver um sistema capaz de identificar os horários de pico e gerenciar o fluxo de usuários, permitindo uma distribuição mais equilibrada e eficiente do uso dos equipamentos. O contexto de aplicação será inicialmente em academias de médio a grande porte, que enfrentam maiores desafios de gerenciamento de espaço e equipamentos.

## Personas

![baixados (1)](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/144366436/046a33b3-d6f4-41fa-9c34-1c5d7d3c4fcc)


Maria Silva
- Idade: 16 anos
- Cidade: Uberlândia, Minas Gerais
- Profissão: Estudante do Ensino Médio
- Tempo de academia: 1 ano
- História: Maria é uma adolescente dedicada aos estudos e à prática de exercícios físicos.
No entanto, ela enfrenta dificuldades para treinar na academia devido ao grande excesso de pessoas, o que a deixa frustrada e desmotivada. Ela se sente aflita devido a grande quantidade de pessoas, ficando ansiosa devido a sua aparência física e a opinião das pessoas, o que acaba perdendo o foco durante os treinos, afetando seu desempenho escolar e sua saúde mental.

![baixados (2) (1)](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/144366436/adf2c186-f1de-4098-9ff2-cbd624f09d85)


Pedro Oliveira
- Idade: 28 anos
- Cidade: Juiz de Fora, Minas Gerais
- Profissão: Engenheiro Civil
- Tempo de academia: 3 anos
- História: Pedro busca manter uma rotina saudável através da prática regular de exercícios
físicos. No entanto, ele enfrenta um grande desafio na academia devido ao excesso de pessoas. Isso causa estresse e ansiedade em Pedro, pois ele passa por problemas devido a grade de horários, sempre pegando turnos onde a academia está lotada de pessoas, fazendo com que ele tenha que sempre revezar seus equipamentos, afetando sua motivação e desempenho nos treinos.

![baixados (3) (1)](https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-1-p2-tiapn-7358-1-01-yourgym/assets/144366436/a277750c-8546-4798-a46a-e0352f6dab55)

Ana Santos
- Idade: 42 anos
- Cidade: Belo Horizonte, Minas Gerais
- Profissão: Proprietária de uma academia
- Tempo de academia: 5 anos
- História: Ana valoriza muito sua saúde física e mental, razão pela qual frequenta regularmente a academia que é proprietária. No entanto, ela enfrenta um grande desafio devido ao excesso de pessoas na própria academia, ficando exposta a reclamações e sensação de que não está gerindo bem seu espaço de treino.

## Histórias de Usuários

Maria chega à academia após o trabalho, por volta das 18h, mas encontra todos os
equipamentos ocupados. Ela desiste do treino e volta para casa, desmotivada.

João planeja sua rotina de treino com antecedência, mas mesmo assim enfrenta dificuldades
para encontrar os equipamentos livres nos horários de pico. Isso afeta sua progressão nos
exercícios.

Ana recebe constantes reclamações dos clientes sobre a superlotação e a espera pelos
equipamentos. Ela reconhece a necessidade de implementar soluções para melhorar a
experiência dos frequentadores.


Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de Usuario | MUITO ALTA | 
|RF-002| Notificação de Horario de Pico   | MUITO ALTA |
|RF-003| Acesso Remoto   | MUITO ALTA |
|RF-004| Feedback dos Usuarios   | BAIXA |
|RF-005| Relatorio de Utilização   | ALTA |
|RF-006| Personalização de Perfis   | BAIXA |
|RF-007| Gerenciamento de de Equipamentos em Manuntenção   | MUITO ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Interface amigável e intuitiva para os usuarios | ALTA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s | ALTA | 
|RNF-003| Escalabilidade para lidar com o aumento do número de usuários. | ALTA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
