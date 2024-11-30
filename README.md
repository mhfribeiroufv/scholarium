# Projeto Scholarium


## Descrição Sucinta

Ferramenta Web de acompanhamento e planejamento de estudos a partir de conteúdo online ou digital. Nele, o usuário pode cadastrar cursos e "subcursos", como capítulos de uma disciplina ou módulos de um curso mais amplo. Múltiplas aulas podem estar associadas a um mesmo curso. Cada aula tem um status de andamento, entre as opções disponibilizadas pelo sistema, bem como controle de datas de inclusão, alteração etc. O usuário pode fazer anotações sobre a aula e também adicionar e associar materiais de estudo à mesma, como arquivos PDF, URLs relacionadas, vídeos etc.

Dois perfis de usuário são contemplados. O usuário comum, que usará a plataforma para controlar seus estudos, e um perfil de usuário administrador, que, além de poder gerenciar as informações de qualquer usuário comum, também poderá fazer a gestão dos próprios usuários em si e também a gestão dos status que podem ser associados às aulas. A gestão de usuários será simples, não havendo possibilidade de criação de grupos.

Plataformas, cursos, aulas e materiais cadastrados podem ter dois níveis de visibilidade: privado (*default*) e público. Isto siginifca que um usuário pode optar por tornar um destes elementos visíveis para outros usuários. Neste caso, estarão visíveis somente para leitura. A permissão de alteração de um elemento permanece exclusiva do usuário proprietário ou de um usuário administrador.

## Objetivos

- Apresentar um projeto incremental, contemplando a grande maioria dos temas e tópicos vistos na disciplina.
- Integrar conceitos vistos em sala de aula.
- Prover uma boa diversidade de exercícios.
- Emular a aplicação de conceitos em um contexto prático real.

## Alguns princípios gerais do projeto

Partiremos de um projeto conceitual único, fornecido pelo professor, por meio de um conjunto de documentos, como alguns dos diagramas UML clássicos, bem como o projeto do banco de dados.

Parte das aulas práticas serão retiradas deste projeto e, após sua realização, o professor incorporará a “solução oficial” daquela etapa ao repositório do projeto, que também estará aberto a contribuições dos estudantes, quando estas forem julgadas interessantes.

## Ferramental auxiliar

### Documental

- Diagramas UML: classes e casos de uso
- Diagrama de Entidade-Relacionamento do banco de dados
- Concepções básicas da de telas da interface

### Compartilhamento

- Este repositório Github
- Moodle/Site do professor
- Google Drive
  
### Outros Softwares (recomendações, não serão utilizados em aula)

- Cypress: testes automatizados
- Jasmine: testes unitários

## Tecnologias

### Front-end

- HTML, CSS e JavaScript
- Bootstrap (framework para CSS)

### Back-end

- EJS (Embedded JavaScript): camada view
- Node.js
- Express.js (framework para projetos no padrão MVC)
- Banco de dados: SQLite 3

### Plataforma utilizada pelo professor

- Linux Ubuntu
- VSCode
- Chrome (majoritariamente) e Firefox
