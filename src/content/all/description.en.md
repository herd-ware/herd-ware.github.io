---
archetype: "page"
title: "Description"
date: 2023-02-18T10:52:46+01:00
weight: 1
---

[Wate2019](/refs#Wate2019)
[Wate2021](/refs#Wate2021)
{{% expand title="Expand me..." %}}Thank you!{{% /expand %}}


## Global information
## Hardware Description Language (HDL)

Hardware description languages are used to describe the behavior of electronic circuits.
For the design of its hardware components, HerdWare mainly use the [Chisel3](https://www.chisel-lang.org/) language.

Chisel3 is an open-source language, initially developped in University of Berkeley, and based on the Scala language.
It allows to describe the behavior of digital designs, but also adds features for hardware generation.
It can be compiled to generate synthesizable Verilog.
Because it is based on the Scala language, it also enables the use of high-level features (object oriented programming, inheritance *etc.*). 

In Herdware, most of the designs (cores, peripherals *etc.*) are described using Chisel3.
They are organized in many different reusable modules.
As described in the following pages, objects are then instantiated in the code to allow the Verilog generation of each component.
Finally, the different generated Verilog designs are perfectly compatible with basic EDA tools (Vivado, Verilator or other ones supporting Verilog).


## Organization

- [HerdWare](/all): This part gives global information about the project.
Different pages are available about tools installation, simulation and customization.
- [Documentation](/doc): This part describes the different developments in the project: hardware, software but also custom ISA changes.
The code of most of them are directly available on [GitHub](https://github.com/herd-ware).
- [References](/refs): This page lists all the different references of the website.
- [Glossary](/gls): This page lists some of the technical words used here.