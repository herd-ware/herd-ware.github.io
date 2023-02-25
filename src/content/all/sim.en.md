---
archetype: "page"
title: "Simulation"
date: 2023-02-18T10:52:46+01:00
draft: true
weight: 3
---
{{% notice style="warning" %}}
Before trying to simulate any design, make sure that you installed the different needed tools as explained in [the installation page](/isard/install).
Particularly, the following tools will be used here:
- sbt,
- Verilator,
- GTKWave,
- the RISC-V toolchain.
{{% /notice %}}

### First simulation

To start a simulation, open a terminal and go to the ISARD project directory previously installed.
```bash
  cd isard
```

A *Makefile* is available in the root project directory.
Multiple commands are defined, especially the ones to build and simulate a design.
In this example, we focus on the simulation of the [Bearn platform](/doc/hw/pltf/bearn).
The design configuration is indicated in the *Makefile* using the *BEARN_CONFIG* variable.

```bash
  make bearn-build BEARN_CONFIG=P32O1V000
```

This command build the Bearn platform with the P32O1V000 config.
*sim/* is created with different subfolders.
During the command execution, multiple tests are also executed.
Finally, the simulation executable is available in the *sim/exe/* directory.
In our case, it is named *VSimIBP32O1V000*.

Finally, to launch an execution generating waveforms:
```bash
./sim/exe/VSimIBP32O1V000 --boot BOOT_HEX_FILE --trigger N_TRIGGER --vcd VCD_FILE
```
with BOOT_HEX_FILE the boot memory content in an hexadecimal file, N_TRIGGER the maximum number of execution cycle and VCD_FILE the *.vcd* file with the generated waveform.
A complete example can be peformed using a program in the [isa-tests](/doc/sw/isa-tests) directory:

```bash
cd sw/isa-tests
make -f Makefile.riscv all
cd ../..
./sim/exe/VSimIBP32O1V000 --boot sw/isa-tests/hex/riscv32-base-i-add-rom.hex --trigger 1000 --vcd sim/vcd/IBP32O1V000/example.vcd
```

Then, the execution of the *add* test of *isa-tests* can be viewed using GTKWave:

```bash
gtkwave sim/vcd/IBP32O1V000/example.vcd
```

{{% notice style="note" %}}
More informations about the build process and the possibility to build specific hardware modules are available on the [dedicated page](/isard/custom#generate-a-precise-hardware-module).
{{% /notice %}}

### Executable options

| Command       |       Value      |                 Description                   |
|:--------------|:-----------------|:----------------------------------------------|
| --boot        | BOOT_HEX_FILE    | **Mandatory.** Initializes the content of the BOOT memory with the BOOT_HEX_FILE. BOOT_HEX_FILE must have hexadecimal values, with bytes separated by spaces. |
| --etd         | ETD_FILE         | Enables the generation of a *.etd* file at the ETD_FILE path. This file indicates informations for each completely executed informations. |
| --rom         | ROM_HEX_FILE     | Initializes the content of the ROM memory with the ROM_HEX_FILE. ROM_HEX_FILE must have hexadecimal values, with bytes separated by spaces. |
| --trigger     | N_TRIGGER        | Enables a trigger to stop the execution after N_TRIGGER cycles. |
| --uart-in     | UART_IN_FILE     | Enables the UART host emitter to read UART_IN_FILE word by word and send the value to the system. |
| --uart-cycle  | UART_CYCLE       | Enables the UART host emitter/receiver to write/read values through UART with UART_CYCLE cycles by bit. |
| --vcd         | VCD_FILE         | Enables the generation of a *.vcd* file at the VCD_FILE path. This file describes the evolution of each signals during the execution. |

{{< caption 
  type="Table" 
  x="1"
  main="Summary of the different executable options."
  sub="They are used to enable/disable some information generations."
>}}

Each generated executable has several options.
They are summarized in the Table 1.
They are implemented using C++.
In the case of the [Bearn platform](/doc/hw/pltf/bearn), you can find this top file in the [corresponding folder](https://github.com/isard-prj/main/hw/pltf/bearn/sim/top.cpp).

### Examples

With the different options, the executable can used in different scenarios.
It can be for a simple test, to extract some informations about an execution, to understand computer architecture ...
Here are described some use cases.

#### Simple simulation

#### Custom design simulation