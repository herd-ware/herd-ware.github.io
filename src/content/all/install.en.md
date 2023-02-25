---
archetype: "page"
title: "Installation"
date: 2023-02-18T10:52:46+01:00
draft: true
weight: 2
---

- [Requirements](#requirements)
    - [sbt](#sbt)
    - [Verilator](#verilator)
    - [GTKWave](#gtkwave)
    - [Vivado](#vivado)
    - [RISC-V Toolchain](#risc-v-toolchain)
- [Local install](#local-install)

## Requirements

The ISARD project used multiple tools to build, simulate or implement the different designs and softwares.
Most of them are completely free and open-source.

#### sbt

Sbt is an open-source tool used to build the different Scala projects.
The ISARD project mainly uses [Chisel3](https://www.chisel-lang.org/) for the hardware design.
Because Chisel3 in based on the Scala language, sbt is perfectly compatible.
In all the command example presented here, sbt will be used.

To install sbt, follow the [install instructions](https://www.scala-sbt.org/1.x/docs/Installing-sbt-on-Linux.html) corresponding to your operating system.

#### Verilator

[Verilator](https://www.veripool.org/verilator/) is an open-source tool to convert and verify Verilog designs.
It allows to generate C++/SystemC equivalent code to the original Verilog design.
Then, the result can be compiled to obtain a much faster executable than the classic EDA simulators.
In this project, we use it to generate executable of our hardware designs to simulate software execution and perform tests.

To install Verilator on our system, follow the [instructions](https://verilator.org/guide/latest/install.html) on the official website.

{{% notice style="warning" %}}
It is recommended to install a recent stable version from the git (*Git Quick Install*).
Currently, the ISARD project has been tested with the **v4.216** version without any particular issue.
{{% /notice %}}

#### GTKWave
[GTKWave](https://gtkwave.sourceforge.net/) is an open-source tool to visualize waveforms.
It is particularly useful at debug time to track the origin of a potential issue.
Some features allow to rename signals or to create groups. 
In this project, we use it to display the different generated *.vcd* files.

The easiest way to install GTKWave is by following the following instructions:
{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
```bash
sudo apt-get install gtkwave
```
{{% /tab %}}
{{< /tabs >}}

#### Vivado
[Vivado](https://www.xilinx.com/products/design-tools/vivado.html) is the name of the implementation of Xilinx for its FPGAs.
It is a proprietary software but some boards are supported by the free version.
Currently, the ISARD project uses it for the implementation part.

The best way to install Vivado is to follow the [download page](https://www.xilinx.com/support/download/index.html/content/xilinx/en/downloadNav/vivado-design-tools/2021-2.html).

{{% notice style="note" %}}
Most of the implementations in this project have been performed using the **2021.2** version.
If nothing prevents to use a more recent version, keep in mind this information in case of potential trouble.
{{% /notice %}}

{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
The first step is to download the *Xilinx Unified Installer 2021.2: Linux Self Extracting Web Installer*.
Then create a directory on our system where you want to install the Xilinx tools.
Keep in mind that current versions of Vivado need a large storage volume (several dozen GB).
After that, in a terminal, go to the corresponding directory and execute:

```bash
chmod +x Xilinx_Unified_*.bin
./Xilinx_Unified_*.bin
```
with * depending the Vivado version.
Follow the instruction in the installer, and give the path of our directory when asked.
The whole install can last more than an hour depending your internet connection.

{{% /tab %}}
{{< /tabs >}}

#### RISC-V Toolchain
[RISC-V](https://riscv.org/) is the name of an open-source Instruction Set Architecture (ISA).
All the cores of the ISARD project are fully or partially based on its specifications.

The [official toolchain](https://github.com/riscv-collab/riscv-gnu-toolchain) is available on [GitHub](https://github.com/riscv-collab/riscv-gnu-toolchain).
It allows to build and install the different tools to compile C/C++, link, disassemble *etc.*

To make your own installation, execute the following instructions:
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
with *RISC_DIR* the path to the directory where you want to install the toolchain.

{{% notice style="note" %}}
It is possible to make an install with different options by following the [official instructions](https://github.com/riscv-collab/riscv-gnu-toolchain#readme).
After that, a precise architecture or ABI can be specified at compile time with **-march** and **-mabi** options.
Currently, only RISC-V 32 bits base with M and A extensions (*-march=rv32ima*) and the simplest ABI (*-mabi=ilp32*) have been tested.
{{% /notice %}}

## Local install

Finally, once all the needed tools are installed, it is possible to play with the ISARD project itself.
To install it, simply follow the following commands:

{{< tabs >}}
{{% tab name="Ubuntu 20.04" %}}
```bash
git clone https://github.com/isard-prj/main isard
cd isard
git submodule update --init --recursive
./update.sh
```
{{% /tab %}}
{{< /tabs >}}

The ISARD project is divided in multiple git submodules.
Each main component (core, software, tool *etc.*) has its own project.
However, due to dependencies, a main project is necesary to interconnect and build them.

Finally, the main directory is organized as follows:
- [build.sbt](https://github.com/isard-prj/main/build.sbt): configures the sbt tools by specifying libraries and hardware modules dependencies.
- [fpga/](https://github.com/isard-prj/main/fpga): contains the specific files used during FPGA implementations. 
- [hw/](https://github.com/isard-prj/main/hw): contains the different hardware designs.
- [Makefile](https://github.com/isard-prj/main/Makefile): allows to launch the different builds and simulations.
- sim/: contains the different generated informations during simulations. It is created by the Makefile. 
- [sw/](https://github.com/isard-prj/main/sw): contains the different software designs.