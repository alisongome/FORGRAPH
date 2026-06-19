# FORGRAPH v13 — Sistema de Análise de Vínculos por Grafos

Versão reformulada com base na pesquisa enviada e no roteiro do projeto prático de Teoria dos Grafos.

## Conceito

O FORGRAPH é um sistema acadêmico de análise de vínculos centrado em um alvo.  
Ele modela pessoas, organizações, contas, endereços, dispositivos, eventos, documentos e registros como **vértices** de um grafo.

As relações entre esses elementos são modeladas como **arestas tipadas, ponderadas, temporais e associadas a evidências**.

Todos os dados são fictícios.

## Por que mudou em relação à versão anterior?

A versão anterior já tinha mapa, grafo e algoritmos.  
A v13 foi reformulada para ficar mais próxima de um sistema sério de análise de vínculos:

- deixou de tratar o peso como número único fixo;
- passou a calcular um **score composto**;
- adicionou evidências simuladas;
- adicionou validade temporal das arestas;
- adicionou status do vínculo: `asserted`, `probable`, `contested`;
- adicionou visão ego-net, timeline, matriz de adjacência e mapa;
- reforçou o núcleo Python com propriedade, evidência e temporalidade.

## Nós / Vértices

Os vértices representam:

- investigados;
- pessoas;
- organizações;
- contas/instrumentos financeiros;
- endereços e locais;
- dispositivos e identificadores digitais;
- eventos;
- documentos/evidências;
- registros judiciais.

## Arestas

As arestas representam:

- vínculo familiar;
- vínculo profissional;
- vínculo societário;
- fluxo financeiro;
- vínculo geográfico;
- vínculo digital;
- comunicação;
- vínculo documental;
- vínculo judicial.

Cada aresta possui:

- origem;
- destino;
- tipo;
- direção;
- status;
- validade temporal;
- evidências;
- componentes de score.

## Score composto

O score exibido é calculado com base nos componentes:

```text
frequência
valor
recência
duração/persistência
confiança da fonte
corroboração cruzada
relevância estrutural
```

No código, o cálculo segue a ideia:

```text
score_exibicao = tipo_mult × norm(f, v, r, d, c, x, s)
```

Isso deixa o sistema mais auditável do que usar apenas um peso único e estático.

## Estrutura de dados

O grafo é implementado como **lista de adjacência**.

Na web, a lista é montada em JavaScript.

No Python, ela fica na classe:

```text
PropertyGraph.adjacency
```

## Algoritmos implementados

Na interface web:

- BFS;
- DFS;
- Dijkstra;
- Centralidade por grau;
- PageRank;
- Componentes conectados / comunidades simples;
- Ciclos financeiros;
- Árvore Geradora Mínima com Kruskal;
- Lista de adjacência;
- Matriz de adjacência.

Na pasta Python:

- BFS;
- DFS;
- Dijkstra adaptado para caminho mais forte;
- Centralidade por grau;
- PageRank;
- Componentes conectados;
- Ciclos financeiros;
- Árvore Geradora Mínima;
- Matriz de adjacência;
- Breakdown do score composto.

## Como abrir o site

Basta abrir o arquivo:

```text
index.html
```

Ou publicar a pasta no GitHub Pages/Netlify.

## Como executar o Python

Entre na pasta:

```bash
cd python
```

Execute:

```bash
python executar_demo.py
```

Ou:

```bash
python3 executar_demo.py
```

## Como apresentar para o professor

Frase recomendada:

> O FORGRAPH é um sistema acadêmico de análise de vínculos que modela um caso investigativo fictício como um grafo de propriedades heterogêneo, temporal e orientado a evidências. Os vértices representam pessoas, organizações, contas, endereços, dispositivos, eventos, documentos e registros. As arestas representam vínculos tipados, ponderados, direcionados ou não, com validade temporal e fonte de evidência. A estrutura principal é uma lista de adjacência, sobre a qual aplicamos BFS, DFS, Dijkstra, centralidade, PageRank, componentes conectados, ciclos financeiros e árvore geradora mínima.

## Observação ética

O projeto é apenas uma simulação acadêmica.  
Não deve ser usado com dados reais sem autorização, base legal, governança, proteção de dados e cadeia de custódia adequada.
