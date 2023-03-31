---
archetype: "page"
title: "Moniteur des performances matérielles (HPM)"
menuTitle: "HPM"
weight: 4
---


## Récapitulatif

| Nom                     |   Description                                  |
|:------------------------|:-----------------------------------------------|
| `alu`                   | Instructions de type ALU exécutées. |
| `bru`                   | Instructions de type BRU exécutées. |
| `cycle`                 | Cycles depuis le dernier reset global. |
| `instret`               | Instructions exécutées. |
| `l1ihit`                | Accès au L1I étant un *hit*. |
| `l1ipftch`              | Accès au L1I anticipé par le prefetcher. |
| `l1imiss`               | Accès au L1I étant un *miss*. |
| `l1dhit`                | Accès au L1D étant un *hit*. |
| `l1dpftch`              | Accès au L1D anticipé par le prefetcher. |
| `l1dmiss`               | Accès au L1D étant un *miss*. |
| `l2hit`                 | Accès au L2 étant un *hit*. |
| `l2pftch`               | Accès au L2 anticipé par le prefetcher. |
| `l2miss`                | Accès au L2 étant un *miss*. |
| `ld`                    | Instructions `load` exécutées. |
| `mispred`               | Instructions de type BRU exécutées mais mal prédites. |
| `rdcycle`               | Instructions `rdcycle` exécutées. |
| `st`                    | Instructions `store` exécutées. |
| `time`                  | Cycles depuis le dernier reset global. |

{{< caption 
  type="Tableau" 
  x="1"
  main="Description des différents compteurs de performance."
  sub=""
>}}
