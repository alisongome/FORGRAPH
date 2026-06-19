# Pitch técnico — FORGRAPH v13

## Problema escolhido

Investigações, auditorias e análises antifraude costumam envolver muitos elementos conectados: pessoas, empresas, contas, imóveis, telefones, documentos e eventos.  
Em tabelas comuns, essas relações ficam difíceis de visualizar e processar.

O problema escolhido foi: **como representar e analisar uma rede de vínculos centrada em um alvo usando Teoria dos Grafos?**

## Modelagem

### Quem são os nós?

Os nós são os elementos do caso:

- investigados;
- pessoas relacionadas;
- organizações;
- contas financeiras;
- endereços e imóveis;
- dispositivos digitais;
- eventos;
- documentos;
- registros judiciais.

### Quem são as arestas?

As arestas são os vínculos entre os nós:

- familiar;
- profissional;
- societário;
- financeiro;
- geográfico;
- digital;
- comunicação;
- documental;
- judicial.

### O grafo é orientado?

O grafo é **misto**.

Algumas relações são não direcionadas, como vínculo familiar ou societário.  
Outras são direcionadas, como fluxo financeiro, documento apontando para uma entidade ou evento transacional.

### As arestas possuem peso?

Sim.  
Mas o projeto não usa apenas um peso fixo. Ele calcula um **score composto** a partir de componentes como frequência, valor, recência, duração, confiança da fonte, corroboração e relevância estrutural.

### Estrutura de dados

A estrutura usada é **lista de adjacência**, pois permite representar de forma eficiente as conexões de cada vértice.

## Algoritmos

- **BFS**: encontra conexões por nível a partir do alvo.
- **DFS**: explora cadeias profundas de vínculos.
- **Dijkstra**: encontra o caminho mais forte usando custo = 11 - score.
- **Centralidade por grau**: identifica nós mais conectados.
- **PageRank**: mede importância relacional.
- **Componentes conectados**: identifica grupos/comunidades.
- **Ciclos financeiros**: detecta fluxos circulares direcionados.
- **MST/Kruskal**: seleciona vínculos essenciais para manter a rede conectada.
- **Matriz de adjacência**: oferece uma visão tabular do subgrafo.

## Interface

A interface oferece:

- visão ego-net centrada no alvo;
- timeline temporal das arestas;
- matriz de adjacência;
- mapa geoespacial fictício;
- drill-down com propriedades, score e evidências;
- relatório de análise.

## Conclusão

O FORGRAPH mostra como um problema real de relações e conexões pode ser modelado como grafo e resolvido com algoritmos clássicos de Teoria dos Grafos.
