---
archetype: "page"
title: "Installation"
date: 2023-02-18T10:52:46+01:00
weight: 2
---

## Sommaire
- [Sommaire](#sommaire)
- [Pré-requis](#pré-requis)
    - [sbt](#sbt)
    - [Verilator](#verilator)
    - [GTKWave](#gtkwave)
    - [Vivado](#vivado)
    - [Chaîne de compilation RISC-V](#chaîne-de-compilation-risc-v)
- [Installation locale](#installation-locale)

## Pré-requis
HerdWare utilise plusieurs outils pour générer, simuler et implémenter les différents composants matériels et logiciels.
La plupart d'entre eux sont cependant gratuits, libres et ouverts.

| Outils           | Version | Matériel           | Logiciel           | Simulation         | FPGA               | 
|:-----------------|---------|:-------------------|:-------------------|:-------------------|:-------------------|
| sbt              |         |{{% icon check %}} | {{% icon check %}} | {{% icon check %}} | {{% icon check %}} |
| Verilator        | v4.216  |                   |                    | {{% icon check %}} |                    |
| GtkWave          |         |                   |                    | {{% icon check %}} |                    |
| Vivado           | 2021.2  |                   |                    |                    | {{% icon check %}} |
| RISC-V Toolchain |         |                   | {{% icon check %}} | {{% icon check %}} |                    |

{{< caption 
  type="Tableau" 
  x="1"
  main="Récapitulatif des différents outils nécessaires pour chaque tâche."
  sub=""
>}}

#### sbt
Sbt est un outil libre et ouvert utilisé pour intéragir avec les différents projets développés en Scala.
HerdWare utilise principalement le langage [Chisel3](https://www.chisel-lang.org/) pour la conception matérielle.
Le Chisel3 étant est basé sur le Scala, sbt est donc parfaitement adapté.
Aisni, dans la plupart des exemples de commandes présentés ici, sbt est utilisé.

Pour installer sbt, le plus simple est de suivre les [instructions d'installation](https://www.scala-sbt.org/1.x/docs/Installing-sbt-on-Linux.html) correspondant à votre système d'exploitation.

#### Verilator
[Verilator](https://www.veripool.org/verilator/) est un outil libre et ouvert permettant la génération de code SystemC à d'une description en Verilog/SystemVerilog.
Une fois compilé, le code généré permet la création d'un exécutable pour simuler le système.
Notamment, ce mode de simulation à l'avantage d'être particulièrement rapide par rapport aux autres simulateurs EDA.
Dans ce projet, Verilator est utilisé pour générer des exécutables de chaque plateforme matérielle pour la simulation et l'exécution de logiciels.

Pour installer Verilator sur votre système, suivez les [instructions](https://verilator.org/guide/latest/install.html) sur le site officiel.

{{% notice style="warning" %}}
Il est recommandé d'installer une version stable en utilisant git (*Git Quick Install*).
Actuellement, HerdWare a été testé avec succès en utilisant la version **v4.216**.
{{% /notice %}}

#### GTKWave
[GTKWave](https://gtkwave.sourceforge.net/) est un outil libre et ouvert pour la visualisation de chronogrammes.
Il est particulièrement utile pour le debuggage afin de suivre l'origine d'un problème potentiel.
Certianes fonctionnalités permettent le renommage de signal ou la création de groupe pour faciliter l'analyse.
Dans HerdWare, GtkWave est particulièrement utilisé pour l'affichage des différents fichiers *.vcd* générés.

La méthode la plus simple pour installer GtkWave est de suivre les instructions suivantes:
{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
```bash
sudo apt-get install gtkwave
```
{{% /tab %}}
{{< /tabs >}}

#### Vivado
[Vivado](https://www.xilinx.com/products/design-tools/vivado.html) est le nom du logiciel de Xilinx pour la conception sur ses FPGAs.
Ce logiciel est propriétaire mais son utilisation pour plusieurs cartes de développement très répandues est possible avec la version gratuite.
Actuellement, HerdWare s'appuye sur cet outil pour l'implémentation sur les FPGAs Xilinx.

La meilleure méthode pour installer Vivado est de télécharger l'utilitaire disponible sur la [page de téléchargement](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2021-2.html).

{{% notice style="note" %}}
La plupart des implémentations de ce projet ont été effectués avec la version **2021.2**.
Cependant, rien ne semble restreindre l'utilisation d'une version plus récente.
En cas de problème, n'hésitez pas à le signaler.
{{% /notice %}}

{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
La première étape est de télécharger l'utilitaire *Xilinx Unified Installer 2021.2: Linux Self Extracting Web Installer*.
Ensuite, il faut prévoir un répertoire sur votre système où seront installés les outils Xilinx.
Gardez à l'esprit que les versions récentes de Vivado nécessitent un volume de stockage important (plusieurs dizaines de GB).
Finalement, dans un terminal, placez-vous dans le répertoire où l'utilitaire a été téléchargé et exécutez:

```bash
chmod +x Xilinx_Unified_*.bin
./Xilinx_Unified_*.bin
```

avec * correspond à la version de Vivado installée.
Ensuite, il faut suivre les différentes instructions sur l'interface graphique de l'utilitaire et donner le chemin vers le répertoire d'installation.
L'ensemble de l'installation peut prendre plus d'une heure selon la connexion internet (téléchargement + installation).

{{% /tab %}}
{{< /tabs >}}

#### Chaîne de compilation RISC-V
[RISC-V](https://riscv.org/) est le nom d'une architecture de jeu d'instructions libre et ouverte.
Tous les processeurs disponibles dans HerdWare s'appuyent (entièrement ou partiellement) sur ses différentes spécifications.

La [chaîne de compilation officielle](https://github.com/riscv-collab/riscv-gnu-toolchain) est disponible [GitHub](https://github.com/riscv-collab/riscv-gnu-toolchain).
Elle permet la compilation et l'installation des différents outils pour la compilation de C/C++, l'édition des liens, le désassemblage *etc.*

Pour installer localement les différents outils:
{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
```bash
git clone https://github.com/riscv/riscv-gnu-toolchain
sudo apt-get install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build
./configure --prefix=${RISCV_DIR} --with-arch=rv32ima --with-abi=ilp32
make
```
{{% /tab %}}
{{< /tabs >}}
avec `RISC_DIR` le chemin vers le répertoire où sera installée la chaîne de compilation.

{{% notice style="note" %}}
Il est possible d'effectuer une installation avec différentes options en suivant les [instructions officielles](https://github.com/riscv-collab/riscv-gnu-toolchain#readme).
Il est également possible d'indiquer des options directement lors de la compilation.
Les options `-march` et `-mabi` permettent notamment de changer l'architecture (les différentes extensions utilisées) et l'ABI.
Actuellement, seule la version 32 bits de l'ISA RISC-V avec les extensions M et A (`-march=rv32ima`) et l'ABI la plus simple (`-mabi=ilp32`) a été testée.
{{% /notice %}}

## Installation locale
Finalement, une fois les différents outils nécessaires installés, il est possible d'utiliser librement le projet HerdWare.
Pour l'installer, il est nécessaire d'utiliser git:

{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
```bash
git clone https://github.com/herd-ware/root herd-ware
cd herd-ware
git submodule update --init --recursive
./update.sh
```
{{% /tab %}}
{{< /tabs >}}

HerdWare est divisé en plusieurs sous-modules git.
Chaque composant principal (processeur, logiciel, outil *etc.*) dispose de son propre projet git et constitute une sous-partie du projet global.
Cependant, à cause des différentes dépendances, un répertoire principal est nécessaire pour connecter l'ensemble.
Le projet principal est celui nommé [root](https://github.com/herd-ware/root).
Il est organisé ainsi:
- [fpga/](https://github.com/herd-ware/root/tree/main/fpga): contient les fichiers nécessaires aux implémentations sur FPGA. 
- [hw/](https://github.com/herd-ware/root/tree/main/hw): contient les codes pour les composants matériels.
- sim/: contient les informations générées durant la simulation. Il est généré par le Makefile. 
- [sw/](https://github.com/herd-ware/root/tree/main/sw): contient les différents logiciels exécutables.
- [build.sbt](https://github.com/herd-ware/root/blob/main/build.sbt): est le fichier de configuration de sbt. Il indique notamment les dépendances entre les différents projets pour la conception matérielle.
- [Makefile](https://github.com/herd-ware/root/blob/main/Makefile): met en place différentes commandes pour la génération du matériel ou la simulation.