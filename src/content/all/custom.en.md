---
archetype: "page"
title: "Custom design"
date: 2023-02-18T10:52:46+01:00
draft: true
weight: 5
---

This page gives some informations to help you in adapting HerdWare to your own needs.
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

In our case, we select the *Example* Module in the [example.scala](https://github.com/herd-ware/root/hw/draft/src/main/scala/example/example.scala) file.
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

For the Cheese platform, the different configurations are placed in [*src/main/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/src/main/scala/configs).
To create your own configuration, copy the *H32AU1V000.scala* file and give him a new name.
Do the same change in the file itself with the name of the main object (*CheeseConfig\**).
It is in this file that you will be able to customize the platform.
Do not forget the dedicated part fort Verilog generation:

```scala
object CheeseH32AU1V000 extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Cheese(CheeseConfigH32AU1V000), args)
}
```

Finally, to generate the corresponding Verilog, adapt the following command with your configuration name:
```bash
sbt "runMain herd.pltf.cheese.CheeseH32AU1V000 --target-dir output"
```

To generate an executable for simulation, few extra-steps are needed.
First, copy your configuration in the [*src/test/scala/configs/*](https://github.com/herd-ware/hw-pltf-cheese/src/test/scala/configs) folder, and add a "d" at the end of the configuration's name.
In the new file, make sure that debug is enabled everywhere:
```bash
debug = true,
...
debug = true,
...
```
As previously, do not forget to modify the lines for Verilog generation at the end of your configuration file.
Finally, to generate the executable, adapt the following command:
```bash
make cheese-build CHEESE_CONFIG=H32AU1V000
```

For unit test support, do not forget to copy and modify a file test in [*hw/pltf/cheese/sim/isa-tests*](https://github.com/herd-ware/hw-pltf-cheese/sim/isa-tests/).
The expected format is:
- 1st column: the name of the tests,
- 2nd column: the expected number of retired instructions,
- 3nd column: the expected number of execution cycles.
You must also compile the tests in *sw/isa-tests*.

{{% notice style="note" %}}
Let's consider the design **HERD_H32_CHAU1V000**.
The corresponding Cheese configuration name is **H32AU1V000**.

Basically, current configurations are named respecting the following format:
1. H: the used privileged ISA, P for RISC-V Privileged ISA or H for [HERB](/doc/isa/herb) ISA.
2. 32: the data size, here 32 bits.
3. AU1: the implemented cores and their number, here 1 Aubrac core.
4. V000: the version with an arbitrary number to indicate internal details.
4. (d): the version has debug enable, here no.

Currently, instantiated designs are named following the template HERD\_${ISA}\_${HW}, with ${ISA} and ${HW} respectively the ISA and hardware indications:
When talking about the whole final system, new indications are then added for the platform: the format HERD_${ISA}_${HW} is used, with ${ISA} and ${HW} respectively the ISA and hardware indications.
Finally, are added:
1. HERD: the herd-ware prefix.
2. CH: the hardware platform, here [Cheese](/doc/hw/pltf/cheese).
{{% /notice %}}

### Add custom hardware (draft)

### Add custom hardware (submodule)