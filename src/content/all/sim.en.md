---
archetype: "page"
title: "Simulation"
date: 2023-02-18T10:52:46+01:00
weight: 3
---
{{% notice style="warning" %}}
Before trying to simulate any design, make sure that you installed the different needed tools as explained in [the installation page](/all/install).
Particularly, the following tools will be used here:
- sbt,
- Verilator,
- GTKWave,
- the RISC-V toolchain.
{{% /notice %}}

### First simulation

To start a simulation, open a terminal and go to the HerdWare directory previously installed.
```bash
  cd herd-ware
```

A *Makefile* is available in the root project directory.
Multiple commands are defined, especially the ones to build and simulate a design.
In this example, we focus on the simulation of the [Cheese platform](/doc/hw/pltf/cheese).
The ISA and design configurations are indicated in the *Makefile* using the *ISA_CFG*  and *HW_CFG* variables.

```bash
  make cheese-sim ISA_CFG=P32 HW_CFG=AU1V000
```

This command build the Cheese platform with the P32 ISA and the AU1V000 hardware configuration.
*sim/* is created with different subfolders.
During the command execution, multiple tests are also executed.
Finally, the simulation executable is available in the *sim/exe/* directory.
In our case, it is named *HERD_P32_CHAU1V000*.

Finally, to launch an execution generating waveforms:
```bash
./sim/exe/HERD_P32_CHAU1V000 --boot BOOT_HEX_FILE --trigger N_TRIGGER --vcd VCD_FILE
```
with BOOT_HEX_FILE the boot memory content in an hexadecimal file, N_TRIGGER the maximum number of execution cycle and VCD_FILE the *.vcd* file with the generated waveform.
A complete example can be performed using a program in the [isa-tests](/doc/sw/isa-tests) directory:

```bash
cd sw/isa-tests
make -f Makefile.riscv all
cd ../..
./sim/exe/HERD_P32_CHAU1V000 --boot sw/isa-tests/hex/riscv32-base-i-add.boot8.hex --trigger 1000 --vcd sim/vcd/HERD_P32_CHAU1V000/example.vcd
```

Then, the execution of the *add* test of *isa-tests* can be viewed using GTKWave:

```bash
gtkwave sim/vcd/HERD_P32_CHAU1V000/example.vcd
```

{{% notice style="note" %}}
More information about the build process and the possibility to build specific hardware modules are available on the [dedicated page](/all/custom#generate-a-precise-hardware-module).
{{% /notice %}}

### Executable options

| Command       |       Value      |                 Description                   |
|:--------------|:-----------------|:----------------------------------------------|
| --boot        | BOOT_HEX_FILE    | **Mandatory.** Initializes the content of the BOOT memory with the BOOT_HEX_FILE. BOOT_HEX_FILE must have hexadecimal values, with bytes separated by spaces. |
| --rom         | ROM_HEX_FILE     | Initializes the content of the ROM memory with the ROM_HEX_FILE. ROM_HEX_FILE must have hexadecimal values, with bytes separated by spaces. |
| --trigger     | N_TRIGGER        | Enables a trigger to stop the execution after N_TRIGGER cycles. |
| --uart-cycle  | UART_CYCLE       | Indicates for the UART host the number UART_CYCLE of cycles by bit. |
| --uart-in     | UART_IN_FILE     | Enables the UART host emitter to read UART_IN_FILE word by word and send the value to the system. |
| --uart-out    |                  | Displays each byte received from the UART. |
| --vcd         | VCD_FILE         | Enables the generation of a *.vcd* file at the VCD_FILE path. This file describes the evolution of each signals during the execution. |
| --etd         | ETD_FILE         | Enables the generation of a *.etd* file at the ETD_FILE path. This file indicates information for each completely executed information. |
| --hpc         |                  | Display HPC values for each core. |

{{< caption 
  type="Table" 
  x="1"
  main="Summary of the different executable options."
  sub="They are used to enable/disable some information generations."
>}}

Each generated executable has several options.
They are summarized in the Table 1.
They are implemented using C++.
In the case of the [Cheese platform](/doc/hw/pltf/cheese), you can find this top file in the [corresponding folder](https://github.com/herd-ware/hw-pltf-cheese/blob/main/sim/sim.cpp).

### Examples

With the different options, the executable can used in different scenarios.
It can be for a simple test, to extract some information about an execution, to understand computer architecture ...
Here are described some use cases.

#### Simple simulation

#### Custom design simulation

