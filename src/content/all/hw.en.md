---
archetype: "page"
title: "Custom design"
date: 2023-02-18T10:52:46+01:00
weight: 5
---

This page gives some information to help you in adapting HerdWare to your own needs.
Here are described some use cases, but this list is non-exhaustive: do not hesitate to ask your question on the [GitHub issue page](https://github.com/herd-ware/root/issues).

### Generate a precise hardware module

It is possible to generate the Verilog of any hardware module of the project.
First, you have to locate in which file is placed the corresponding Chisel3 class.
Open the file and ensure that the corresponding structure to generate the Verilog is present:

```Scala
object Example extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Example(4), args)
}
```

In our case, we select the *Example* Module in the [example.scala](https://github.com/herd-ware/root/blob/main/hw/draft/src/main/scala/example/example.scala) file.
The module is placed in the *herd.draft.example* package (indicated at the beginning of the file).
Then, to generate the corresponding Verilog, go to the root of the project and launch:
```bash
sbt "runMain herd.draft.example.Example --target-dir output"
```
*--target-dir output* indicates to generate the files in the *output/* folder.
Finally, the *output/Example.v* file has been created.


### Create a platform configuration

Some platform configurations are already available.
However, it can be interesting to create one with your own needs.

For the Cheese platform, the different configurations are placed in [*src/main/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/src/main/scala/configs).
To create your own configuration, copy the *P32AU1V000.scala* file and give it a new name.
Do the same change everywhere in the file itself with the name of the classes (*CheeseParams\** and *CheeseConfig\**).
It is in this file that you will be able to customize the platform.
Do not forget the dedicated object for Verilog generation (*Cheese\**):

```scala
object CheeseP32AU1V000 extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Cheese(new CheeseConfigP32AU1V000(debug = false)), args)
}
```

In this case, *debug* value is indicated directly in the generator object.

Finally, to generate the corresponding Verilog, adapt one of the following commands with your configuration name:

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

{{% notice style="note" %}}
Let's consider the design **HERD_P32_CHAU1V000**.
The corresponding Cheese configuration name is **P32AU1V000**.

Basically, current configurations are named respecting the following format:
1. P: the used privileged ISA, P for RISC-V Privileged ISA or C for [CHAMP](/doc/isa/champ) ISA.
2. 32: the data size, here 32 bits.
3. AU1: the implemented cores and their number, here 1 Aubrac core.
4. V000: the version with an arbitrary number to indicate internal details.
5. (d): the version has debug enabled, here no.

Currently, instantiated designs are named following the template HERD\_${ISA}\_${HW}, with ${ISA} and ${HW} respectively the ISA and hardware indications:
When talking about the whole final system, new indications are then added for the platform: the format HERD_${ISA}_${HW} is used, with ${ISA} and ${HW} respectively the ISA and hardware indications.
Finally, are added:
1. HERD: the herd-ware prefix.
2. CH: the hardware platform, here [Cheese](/doc/hw/pltf/cheese).
{{% /notice %}}

### Create a platform simulator
To generate an executable for simulation, few extra-steps are needed.
First, copy and modify a configuration in the [*src/test/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/src/main/scala/configs) folder.
It allows to create the corresponding object for the simulator.
In the new file, make sure that debug is enabled everywhere.

Finally, to generate the executable, adapt the following command:
```bash
make cheese-sim ISA_CFG=P32 HW_CFG=AU1V000
```

For unit test support, do not forget to copy and modify a file test in [*hw/pltf/cheese/sim/isa-tests*](https://github.com/herd-ware/hw-pltf-cheese/tree/main/sim/isa-tests).
The expected format is:
- 1st column: the name of the tests,
- 2nd column: the expected number of retired instructions,
- 3nd column: the expected number of execution cycles.
You must also add a new configuration in the [configs.h](https://github.com/herd-ware/hw-pltf-cheese/blob/main/sim/lib/configs.h) file.
Finally, after compiling the tests in *sw/isa-tests*, run:
``` bash
make cheese-test ISA_CFG=P32 HW_CFG=AU1V000
```



### Add custom hardware (draft)

### Add custom hardware (submodule)