---
archetype: "page"
title: "Simulation"
date: 2023-02-18T10:52:46+01:00
weight: 3
---
{{% notice style="warning" %}}
Avant de simuler un composant matériel, assurez-vous que les différents outils nécessaires soient installés comme expliqué sur la [page dédiée](/all/install).
Notamment, les outils suivants sont utilisés:
- sbt,
- Verilator,
- GTKWave,
- la chaîne de compilation RISC-V.
{{% /notice %}}

## Première simulation

Pour effectuer une simulation, ouvrez un terminal et placez-vous dans le répertoire HerdWare installé précédemment:
```bash
  cd herd-ware
```

Un fichier *Makefile* est disponible dans le répertoire principal *root*.
Différentes commandes pour la génération et la simulation du matériel y sont définies.
Dans cet exemple, l'objectif est de simuler une version de la [plateforme Cheese](/doc/hw/pltf/cheese).
L'ISA et la configuration matérielle sont précisées dans le *Makefile* avec les variables `ISA_CFG` et `HW_CFG`.

```bash
  make cheese-sim ISA_CFG=P32 HW_CFG=AU1V000
```

Cette commande lance la génération dela plateforme Cheese en utilisation l'ISA P32 et la configuration matérielle AU1V000.
Le répertoire *sim/* est créé avec différents sous-dossiers.
L'exécutable pour la simulation est disponible dans le répertoire *sim/exe/*.
Ici, il se nomme `HERD_P32_CHAU1V000`.

Finalement, pour lancer une simulation et générer un chronogramme, il faut suivre la commande suivante
```bash
./sim/exe/HERD_P32_CHAU1V000 --boot BOOT_HEX_FILE --trigger N_TRIGGER --vcd VCD_FILE
```
avec `BOOT_HEX_FILE` le contenu de la mémoire de démarrage *BOOT* dans un fichier au format hexadécimal, `N_TRIGGER` le nombre maximal de cycles d'exécution et `VCD_FILE` le fichier *.vcd* décrivant l'évolution des signaux.
Voici un exemple de simulatio utilisant un program de test dans le répertoire [isa-tests](/doc/sw/isa-tests):

```bash
cd sw/isa-tests
make -f Makefile.riscv all
cd ../..
./sim/exe/HERD_P32_CHAU1V000 --boot sw/isa-tests/hex/riscv32-base-i-add-rom.hex --trigger 1000 --vcd sim/vcd/HERD_P32_CHAU1V000/example.vcd
```

Ensuite, l'évolution de l'exécution du test *add*  peut être visualisée avec GTKWave:
```bash
gtkwave sim/vcd/HERD_P32_CHAU1V000/example.vcd
```

{{% notice style="note" %}}
Plus d'informations sur le processus de génération et la possibilité de concevoir des composants matériels précis sont disponibles sur la [page dédiée](/all/custom#generate-a-precise-hardware-module).
{{% /notice %}}

## Options de simulation

| Option        | Valeur           | Description                   |
|:--------------|:-----------------|:----------------------------------------------|
| --boot        | BOOT_HEX_FILE    | **Obligatoire.** Initialise le contenu de la mémoire de démarrage *BOOT* avec le fichier BOOT_HEX_FILE. BOOT_HEX_FILE doit contenir des valeurs hexadécimales, les octets étant séparés par des espaces. |
| --rom         | ROM_HEX_FILE     | Initialise le contenu de la mémoire *ROM* avec le fichier ROM_HEX_FILE. ROM_HEX_FILE doit contenir des valeurs hexadécimales, les octets étant séparés par des espaces. | 
| --trigger     | N_TRIGGER        | Active un trigger pour stopper l'exécution après N_TRIGGER cycles. |
| --uart-cycle  | UART_CYCLE       | Nombre de cycles par bit utilisé par l'UART hôte. |
| --uart-in     | UART_IN_FILE     | Active l'envoi de données par l'UART hôte. Le fichier UART_IN_FILE conteint des valeurs hexadécimal, les octets étant séparés par des espaces.  |
| --uart-out    |                  | Active l'affichage de chaque octet reçu par l'UART hôte. |
| --vcd         | VCD_FILE         | Active la génération d'un fichier VCD_FILE au format *.vcd*. Ce fichier décrit l'évolution de chaque signal du système durant l'exécution. |
| --etd         | ETD_FILE         | Active la génération d'un fichier ETD_FILE au format *.etd*. Ce fichier donne des informations sur chaque instruction complètement exécutée. |
| --hpc         |                  | Affiche la valeur des HPC pour chaque processeur à la fin de la simulation. |

{{< caption 
  type="Tableau" 
  x="1"
  main="Récapitulatif des différentes options de simulation"
  sub=""
>}}

Chaque exécutable généré dans HerdWare pour la simulation supporte différentes options implémentées à l'aide de C++.
Elles sont regroupées dans le Tableau 1.
Dans le cas de la [plateforme Cheese](/doc/hw/pltf/cheese), le fichier top est disponible dans le [répertoire suivant](https://github.com/herd-ware/hw-pltf-cheese/blob/main/sim/sim.cpp).

## Exemples

Les différentes options mises à disposition permettent différentes utilisations des exécutables.
Cela peut aller d'un simple test à l'extraction d'informations durant une exécution.
Ci-dessous sont décrits plusieurs scénarios possibles d'utilisation.

### Simulation standard

### Traces d'exécution

### HPC

