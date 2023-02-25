---
archetype: "page"
title: "Custom design"
date: 2023-02-18T10:52:46+01:00
draft: true
weight: 5
---

This page gives some informations to help you in adapting the ISARD project to your own needs.
Here are described some use cases, but this list is non-exhaustive: do not hesitate to ask your question on the [GitHub issue page](https://github.com/isard-prj/main/issues).

### Generate a precise hardware module

It is possible to generate the Verilog of any hardware module of the project.
First, you have to locate in which file is placed the corresponding Chisel3 class.
Open the file and ensure that the corresponding structure to generate the Verilog is present:

```Scala
object Example extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Example(4), args)
}
```

In our case, we select the *Example* Module in the [example.scala](https://github.com/isard-prj/main/hw/draft/src/main/scala/example/example.scala) file.
The module is placed in the *isard.draft.example* package (indicated at the beginning of the file).
Then, to generate the corresponding Verilog, go to the root of the project and launch:
```bash
sbt "runMain isard.draft.example.Example --target-dir output"
```
*--target-dir output* indicates to generate the files in the *output/* folder.
Finally, the *output/Example.v* file has been created.


### Create a platform configuration

Some platform configuration are already available.
However, it can be interesting to create one with your own needs.

For the Bearn platform, the different configurations are placed in [*hw/pltf/bearn/src/main/scala/configs/*](https://github.com/isard-prj/main/hw/pltf/bearn/src/main/scala/configs).
To create your own configuration, copy the *P32O1V000.scala* file ang give him a new name.
Do the same change in the file itself with the name of the main object (*BearnConfig\**).
It is in this file that you will be able to customize the platform.
Then, in [*bearn.scala*](https://github.com/isard-prj/main/hw/pltf/bearn/src/main/scala/bearn.scala), copy and modify at the end of the file the following lines for the Verilog generation:

```scala
object BearnP32O1V000 extends App {
  (new chisel3.stage.ChiselStage).emitVerilog(new Bearn(BearnConfigP32O1V000), args)
}
```

{{% notice style="note" %}}
Let's consider the design **IBP32O1V000**.
Currently, the platform configurations are named according to the following convention:
1. P: the used privileged ISA, P for RISC-V Privileges or D for [CEPS](/doc/isa/ceps) Domes.
2. 32: the data size, here 32 bits.
3. O1: the implemented cores and their number, here 1 Ossau core.
4. V000: the version with an arbitrary number to indicate internal details.
4. (d): the version has debug enable, here no.

When talking about the whole final system, new indications are then added:
1. I: the ISARD project prefix.
2. B: the hardware platform, here [Bearn](/doc/hw/pltf/bearn).

{{% /notice %}}

Finally, to generate the corresponding Verilog, adapt the following command with your configuration name:
```bash
sbt "runMain isard.pltf.bearn.BearnP32O1V000 --target-dir output"
```

To generate an executable for simulation, few extra-steps are needed.
First copy, your configuration in the *hw/pltf/bearn/src/main/scala/configs/* folder, and add a "d" at the end of the configuration's name.
In the new file, make sure that debug is enabled everywhere:
```bash
debug = true,
...
debug = true,
...
```
As previously, copy and modify the lines for Verilog generation at the end of [sim.scala](https://github.com/isard-prj/main/hw/pltf/bearn/src/test/scala/sim.scala).
Finally, to generate the executable, adapt the following command:
```bash
make bearn-build BEARN_CONFIG=P32O1V000
```

For unit test support, do not forget to copy and modify a file test in [*hw/pltf/bearn/sim/isa-tests](https://github.com/isard-prj/main/hw/pltf/bearn/sim/isa-tests/).
The expected format is:
- 1st column: the name of the tests,
- 2nd column: the expected number of retired instructions,
- 3nd column: the expected number of execution cycles.
You must also compile the tests in *sw/isa-tests*.









### Add custom hardware (draft)

### Add custom hardware (submodule)