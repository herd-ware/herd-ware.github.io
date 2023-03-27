---
archetype: "page"
title: "Génération matérielle configurable"
menuTitle: "Génération matérielle"
date: 2023-02-18T10:52:46+01:00
weight: 5
---

{{% notice style="warning" %}}
Avant de générer un composant matériel, assurez-vous que les différents outils nécessaires soient installés comme expliqué sur la [page dédiée](/all/install).
Notamment, les outils suivants sont utilisés:
- sbt,
- Verilator
{{% /notice %}}

## Générer un composant matériel

Il est possible de générer le Verilog de chaque composant matériel du projet.
Tout d'abord, vous devez localiser dans quelle librairie se trouve la `class` et l'`object` correspondants.
Par exemple, le composant `Example` est situé dans le fichier [*example.scala*](https://github.com/herd-ware/root/blob/main/hw/draft/src/main/scala/example/example.scala)
Le fichier est placé dans la librairie `herd.draft.example`.
L'`object` permettant la génération du Verilog est le suivant:

```Scala
object Example extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Example(4), args)
}
```

Ainsi, pour générer le Verilog correspondant, il faut se placer à la base du projet *root* et lancer la commande:
```bash
sbt "runMain herd.draft.example.Example --target-dir output"
```
`--target-dir output` indique le répertoire où seront générés les fichiers.
Finalement, le fichier *output/Example.v* a été créé.


## Créer une configuration de plateforme

Différentes configurations de plaateformes sont disponibles.
Elles utilisents différentes variantes de processeurs, de jeux d'instructions, de périphériques *etc.*
Pour certains usages, il peut être intéressant d'en créeer une s'daptant à des besoins spécifiques.

Nous allons prendre ici le cas de la plateforme **Cheese**.
Ses différentes configurations sont placée dans le répertoire [*src/main/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/src/main/scala/configs).
Pour créer votre propre configuration, copiez le fichier *P32AU1V000.scala* et changez son nom.
Ensuite, dans le fichier lui-même, remplacez également les différentes apparitions du nom d'origine (*e.g. `CheeseParamsP32AU1V000`, `CheeseConfigP32AU1V000`).
Ensuite, modifiez les différents paramètres de la plateforme selon vos besoins.
Là encore, n'oubliez pas l'`object` permettant la génération du Verilog:

```scala
object CheeseP32AU1V000 extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Cheese(new CheeseConfigP32AU1V000(debug = false)), args)
}
```

Le paramètre `debug` est ici précisé directement au moment de la création de l'objet.
Enfin, pour générer le Verilog correspondant, adaptez l'une des commandes suivantes avec le nom de votre configuration:

{{< tabs >}}
{{% tab name="sbt" %}}
```bash
sbt "runMain herd.pltf.cheese.CheeseP32AU1V000 --target-dir output"
```
{{% /tab %}}
{{% tab name="make" %}}
```bash
make cheese-build ISA_CFG=P32 HW_CFG=AU1V000
```
{{% /tab %}}
{{< /tabs >}}

{{% notice style="note"  title="Nommage des configurations" %}}
Considérons le design **HERD_P32_CHAU1V000**.
La configuration correspondante de la plateforme Cheese est **P32AU1V000**.
Ainsi, les différentes configurations sont actuellement nommées à partir de la convention suivante:
1. `P`: l'ISA privilégiée utilisée, avec P pour l'ISA RISC-V privilégiée ou C pour l'ISA [CHAMP](/doc/isa/champ) ISA.
2. `32`: la taille des données, ici 32 bits.
3. `AU1`: les processeurs implémentés et le nombre d'instances, ici 1 processeur Aubrac.
4. `V000`: la version avec un nombre arbitraire pour différencier des spécificités matérielles internes.

Ensuite, les différentes instances utilisent le modèle `HERD_${ISA}_${HW}` avec `${ISA}` et `${HW}` respectivement les informations sur l'ISA et le matériel.
Pour décrire le système final, d'autres indications sont ajoutées sur le projet et la plateforme.
Le format `HERD_${ISA}_${HW}` est utilisé avec comme informations supplémentaires:
1. `HERD`: le préfixe du projet,
2. `CH` la plateforme matérielle, ici [Cheese](/doc/hw/pltf/cheese).
{{% /notice %}}

## Créer un simulateur de plateforme

Pour générer un exécutable pour la simulation, des étapes supplémentaires sont nécessaires.
Tout d'abord, copiez et modifiez avec le nom de votre configuration l'un des fichiers dans le répertoire [*src/test/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/src/main/scala/configs).
Cela permettra d'instancier le composant correspondant au simulateur de la plateforme.
Lors de la création de l'`object`, assurez-vous que `debug = true` pour conserver certains signaux de debuggage.
Enfin, pour générer l'exécutable, adaptez la commande suivante:

Finally, to generate the executable, adapt the following command:
```bash
make cheese-sim ISA_CFG=P32 HW_CFG=AU1V000
```

## Support des tests unitaires

Pour le support des tests unitaires, il est également nécessaire de copier et modifier un fichier de test dans [*hw/pltf/cheese/sim/isa-tests*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/sim/isa-tests).
Dans ces fichiers *\*.tst*, le format est le suivant:
- 1ère colonne: nom du test.
- 2ème colonne: nombre attendu d'instructions exécutées.
- 3ème colonne: nombre attendu de cycles d'exécution.

Une nouvelle configuration doit aussi être ajoutée dans le fichier [configs.h](https://github.com/herd-ware/hw-pltf-cheese/blob/main/sim/lib/configs.h).
Finalement, après la compilation des tests dans *sw/isa-tests*, il suffit de lancer:
``` bash
make cheese-test ISA_CFG=P32 HW_CFG=AU1V000
```

## Ajouter un composant matériel (draft)

## Ajouter un composant matériel (sous-module)

## Ajouter un test unitaire
