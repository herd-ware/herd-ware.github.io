var relearn_search_index = [
  {
    "content": "Global information Hardware Description Language (HDL) Hardware description languages are used to describe the behavior of electronic circuits. For the design of its hardware components, HerdWare mainly use the Chisel3 language.\nChisel3 is an open-source language, initially developped in University of Berkeley, and based on the Scala language. It allows to describe the behavior of digital designs, but also adds features for hardware generation. It can be compiled to generate synthesizable Verilog. Because it is based on the Scala language, it also enables the use of high-level features (object oriented programming, inheritance etc.).\nIn Herdware, most of the designs (cores, peripherals etc.) are described using Chisel3. They are organized in many different reusable modules. As described in the following pages, objects are then instantiated in the code to allow the Verilog generation of each component. Finally, the different generated Verilog designs are perfectly compatible with basic EDA tools (Vivado, Verilator or other ones supporting Verilog).\nOrganization  HerdWare: This part gives global information about the project. Different pages are available about tools installation, simulation and customization. Documentation: This part describes the different developments in the project: hardware, software but also custom ISA changes. The code of most of them are directly available on GitHub. References: This page lists all the different references of the website. Glossary: This page lists some of the technical words used here.  ",
    "description": "",
    "tags": null,
    "title": "Description",
    "uri": "/en/all/description/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "HerdWare",
    "uri": "/en/all/index.html"
  },
  {
    "content": "  Name origin Image's source.  Aubrac is a french breed of cows from the Plateau de l’Aubrac in the south-central of France. It is mainly raised for its meat, but also for its milk which can be used for the Laguiole cheese.\n  This page and the following ones describe the Aubrac core. It is single issue in-order CPU build around a classic pipeline and two levels of cache memories. Based on the RISC-V ISA, it is developed in Chisel3 and has a lot of different parameters (the data size, the number of stages, the supported extensions etc).\nOverview   \nFigure 1: Overview of the the Aubrac core.  All the possible stages are represented, even if some of them are optional.    The Figure 1 represents the whole Aubrac core. It is composed of 8 parts. The Front-End is responsible for the instruction fetch. The NLP is used to predict control-flow changes. The Back-End is responsible for the decoding and the execution of the instructions. The Hardware Field Unit (HFU) is an execution unit dedicated to fields management (CHAMP ISA). The I/O module is used for core’s specific memory addressable mechanism (e.g. privileged timers). L1I, L1D and L2 are respectively the Level 1 Instruction, Level 1 Data and the Level 2 (Instruction and Data) private cache memories.\nISA support The Aubrac core is based on the RISC-V ISA. It currently supports both 32 and 64 bits bases.\n   Extension Version Implemented ? Tested ? Optional ? Dependencies     M 2.0       A 2.1       B 1.0.0       Zicsr        Zicntr        Zifencei 2.0        Table 1: Summary of the different supported RISC-V extensions by the Aubrac core.  Some still have to be tested more in depth.    As described on the Table 1, multiple extensions are currently implemented in the Aubrac. Most of them are optional: the dedicated hardware parts are completely removed during Verilog generation.\n Warning If both 32 and 64 bits are implemented, only 32 bits version is currently used and tested. More work is needed to verify 64 bit specific instructions, like ones dedicated to word-size datas.\n  Table of contents  ",
    "description": "",
    "tags": null,
    "title": "Aubrac core",
    "uri": "/en/doc/hw/cores/aubrac/index.html"
  },
  {
    "content": "  Tip    Figure 1: Overview of the the Cheese platform.     ",
    "description": "",
    "tags": null,
    "title": "Cheese platform",
    "uri": "/en/doc/hw/pltf/cheese/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Common",
    "uri": "/en/doc/hw/common/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Context Hardware Architecture for Microarchitectural Protection (CHAMP)",
    "uri": "/en/doc/isa/champ/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "GPIO",
    "uri": "/en/doc/hw/io/gpio/index.html"
  },
  {
    "content": "  Tip   ",
    "description": "",
    "tags": null,
    "title": "Hay cache memory",
    "uri": "/en/doc/hw/mem/hay/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Instruction Set Architecture (ISA)",
    "uri": "/en/doc/isa/index.html"
  },
  {
    "content": "Biography I am post-doctoral researcher in computer security at the LAAS-CNRS of Toulouse in France. I work with Vincent Migliore on the design of processors secure against side-channel attacks (power consumption and electromagnetic fields measurements).  Previously, I was graduated from the PHELMA - Grenoble INP engineering school in electronics and microelectronics. Then, during my PhD, I was working at Inria in the CIDRE Team advised by Ronan Lashermes.  Mathieu Escouteloup       Interests  Processor architecture Digital design Hardware security Hardware/Software interface Side-channel attacks  Professionnal experience  2021/11 - Now: Post-doctoral researcher LAAS-CNRS, Toulouse, France  2018/10 - 2021/09: PhD student Inria, Rennes, France  2015/09 - 2018/08: Apprentice engineer Dolphin Integration (now Dolphin Design), Meylan, France    Education  PhD in computer science, 2021 Ensuring microarchitectural isolation in processors. Université de Rennes 1, France  Engineering school, 2018 PHELMA - Grenoble INP, France  Two-year technical degree, 2015 IUT Paul Sabatier, Toulouse, France    Teaching During both my PHD and post-doctoral contract, I was teachning assistant for the following courses:    Course Institution Year Level    Digital design - VHDL Université de Rennes 1 2019-2021 Master 1   Assembly language - Arm INSA Toulouse 2021-2023 Licence 3   Object-Oriented Programming - C++ INSA Toulouse 2021-2022 Licence 3   Computer architecture INSA Toulouse 2022-2023 Licence 2   Microcontrollers - C INSA Toulouse 2022-2023 Master 1   Publications 2021  Ensuring microarchitectural isolation in processors. Mathieu Escouteloup PhD Thesis Theses.fr Slides   Under the dome: preventing hardware timing leakages Mathieu Escouteloup, Ronan Lashermes, Jacques Fournier et Jean-Louis Lanet International Conference on Smart Card Research and Advanced Applications (CARDIS 2021) HAL Conference Slides   Electromagnetic Fault Injection against a Complex CPU, toward New Micro-Architectural Fault Models Thomas Trouchkine, Sébanjila Kevin Bukasa, Mathieu Escouteloup, Ronan Lashermes et Guillaume Bouffard Journal of Cryptographic Engineering (JCEN 2021) HAL   2020  Recommendations for a Radically Secure ISA Mathieu Escouteloup, Jacques Fournier, Jean-Louis Lanet and Ronan Lashermes Fourth Workshop on Computer Architecture Research with RISC-V (CARRV 2020) HAL Workshop Slides   Talks 2021  Preventing timing information leakages from the microarchitecture Mathieu Escouteloup, Ronan Lashermes, Christophe Bidan and Jacques FournierS 2nd RISC-V Week Workshop Slides   2019  Microarchitecture security Mathieu Escouteloup, Ronan Lashermes, Jean-Louis Lanet and Jacques Fournier Workshop on Practical Hardware Innovation in Security and Characterization (PHISIC 2019) Workshop Slides   Projects  IDROMEL - Improving the Design of secure systems by a Reduction Of Micro- architectural Effects on side-channeL attacks  ANR   ",
    "description": "",
    "tags": null,
    "title": "Mathieu Escouteloup",
    "uri": "/en/more/about/mathieu-escouteloup/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Memory Bus for Security (MB4S)",
    "uri": "/en/doc/hw/common/mb4s/index.html"
  },
  {
    "content": " Requirements  sbt Verilator GTKWave Vivado RISC-V Toolchain   Local install  Requirements HerdWare uses multiple tools to build, simulate or implement the different designs and softwares. Most of them are completely free and open-source.\n   Tools Hardware Software Simulation FPGA     sbt       Verilator       GtkWave       Vivado       RISC-V Toolchain        Table 1: Summary of the different needed tools for each specific task.     sbt Sbt is an open-source tool used to build the different Scala projects. HerdWare mainly uses Chisel3 for the hardware design. Because Chisel3 in based on the Scala language, sbt is perfectly compatible. In all the command example presented here, sbt will be used.\nTo install sbt, follow the install instructions corresponding to your operating system.\nVerilator Verilator is an open-source tool to convert and verify Verilog designs. It allows to generate C++/SystemC equivalent code to the original Verilog design. Then, the result can be compiled to obtain a much faster executable than the classic EDA simulators. In this project, we use it to generate executable of our hardware designs to simulate software execution and perform tests.\nTo install Verilator on our system, follow the instructions on the official website.\n Warning It is recommended to install a recent stable version from the git (Git Quick Install). Currently, HerdWare has been tested with the v4.216 version without any particular issue.\n  GTKWave GTKWave is an open-source tool to visualize waveforms. It is particularly useful at debug time to track the origin of a potential issue. Some features allow to rename signals or to create groups. In this project, we use it to display the different generated .vcd files.\nThe easiest way to install GTKWave is by following the following instructions: Ubuntu 20.04  sudo apt-get install gtkwave    \nVivado Vivado is the name of the implementation of Xilinx for its FPGAs. It is a proprietary software but some boards are supported by the free version. Currently, HerdWare uses it for the implementation part.\nThe best way to install Vivado is to follow the download page.\n Note Most of the implementations in this project have been performed using the 2021.2 version. If nothing prevents to use a more recent version, keep in mind this information in case of potential trouble.\n  Ubuntu 20.04  The first step is to download the Xilinx Unified Installer 2021.2: Linux Self Extracting Web Installer. Then create a directory on our system where you want to install the Xilinx tools. Keep in mind that current versions of Vivado need a large storage volume (several dozen GB). After that, in a terminal, go to the corresponding directory and execute:\nchmod +x Xilinx_Unified_*.bin ./Xilinx_Unified_*.bin with * depending the Vivado version. Follow the instruction in the installer, and give the path of our directory when asked. The whole install can last more than an hour depending your internet connection.\n   RISC-V Toolchain RISC-V is the name of an open-source Instruction Set Architecture (ISA). All the cores of HerdWare are fully or partially based on its specifications.\nThe official toolchain is available on GitHub. It allows to build and install the different tools to compile C/C++, link, disassemble etc.\nTo make your own installation, execute the following instructions: Ubuntu 20.04  git clone https://github.com/riscv/riscv-gnu-toolchain sudo apt-get install autoconf automake autotools-dev curl python3 libmpc-dev libmpfr-dev libgmp-dev gawk build-essential bison flex texinfo gperf libtool patchutils bc zlib1g-dev libexpat-dev ninja-build ./configure --prefix=${RISCV_DIR} --with-arch=rv32ima --with-abi=ilp32 make     with RISC_DIR the path to the directory where you want to install the toolchain.\n Note It is possible to make an install with different options by following the official instructions. After that, a precise architecture or ABI can be specified at compile time with -march and -mabi options. Currently, only RISC-V 32 bits base with M and A extensions (-march=rv32ima) and the simplest ABI (-mabi=ilp32) have been tested.\n  Local install Finally, once all the needed tools are installed, it is possible to play with HerdWare itself. To install it, simply follow the commands:\nUbuntu 20.04  git clone https://github.com/herd-ware/root herd-ware cd herd-ware git submodule update --init --recursive ./update.sh     HerdWare is divided in multiple git submodules. Each main component (core, software, tool etc.) has its own project. However, due to dependencies, a main project is necesary to interconnect and build them.\nFinally, the main directory is organized as follows:\n fpga/: contains the specific files used during FPGA implementations. hw/: contains the different hardware designs. sim/: contains the different generated information during simulations. It is created by the Makefile. sw/: contains the different software designs. build.sbt: configures the sbt tools by specifying libraries and hardware modules dependencies. Makefile: allows to launch the different builds and simulations.  ",
    "description": "",
    "tags": null,
    "title": "Installation",
    "uri": "/en/all/install/index.html"
  },
  {
    "content": "Table of contents Aubrac core  Salers core  Abondance core   Summary    Core Abbreviation Version     Aubrac AU 0.0.1   Abondance AB 0.0.1   Salers SA     ",
    "description": "",
    "tags": null,
    "title": "Cores",
    "uri": "/en/doc/hw/cores/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Documentation",
    "uri": "/en/doc/index.html"
  },
  {
    "content": " Common Memory Bus for Security (MB4S) Cores Aubrac core Salers core Abondance core I/Os GPIO UART SPI I2C PS/2 Timers Memories Hay cache memory Platforms Cheese platform  ",
    "description": "",
    "tags": null,
    "title": "Hardware",
    "uri": "/en/doc/hw/index.html"
  },
  {
    "content": "  Warning The Salers code the code is currently revised before being made available on GitHub. Do not hesitate to ask if you want information.\n   Name origin Image's source.  Salers is a french breed of cows from the Cantal in the south-central of France. It is raised for its meat but also its milk used in the Salers cheese.\n  Overview ISA support Table of contents  ",
    "description": "",
    "tags": null,
    "title": "Salers core",
    "uri": "/en/doc/hw/cores/salers/index.html"
  },
  {
    "content": "Protocol Transmitter (Tx) Receiver (Rx) Top ",
    "description": "",
    "tags": null,
    "title": "UART",
    "uri": "/en/doc/hw/io/uart/index.html"
  },
  {
    "content": "  Warning Before trying to simulate any design, make sure that you installed the different needed tools as explained in the installation page. Particularly, the following tools will be used here:\n sbt, Verilator, GTKWave, the RISC-V toolchain.    First simulation To start a simulation, open a terminal and go to the HerdWare directory previously installed.\n cd herd-ware A Makefile is available in the root project directory. Multiple commands are defined, especially the ones to build and simulate a design. In this example, we focus on the simulation of the Cheese platform. The ISA and design configurations are indicated in the Makefile using the ISA_CFG and HW_CFG variables.\n make cheese-sim ISA_CFG=P32 HW_CFG=AU1V000 This command build the Cheese platform with the P32 ISA and the AU1V000 hardware configuration. sim/ is created with different subfolders. During the command execution, multiple tests are also executed. Finally, the simulation executable is available in the sim/exe/ directory. In our case, it is named HERD_P32_CHAU1V000.\nFinally, to launch an execution generating waveforms:\n./sim/exe/HERD_P32_CHAU1V000 --boot BOOT_HEX_FILE --trigger N_TRIGGER --vcd VCD_FILE with BOOT_HEX_FILE the boot memory content in an hexadecimal file, N_TRIGGER the maximum number of execution cycle and VCD_FILE the .vcd file with the generated waveform. A complete example can be performed using a program in the isa-tests directory:\ncd sw/isa-tests make -f Makefile.riscv all cd ../.. ./sim/exe/HERD_P32_CHAU1V000 --boot sw/isa-tests/hex/riscv32-base-i-add-rom.hex --trigger 1000 --vcd sim/vcd/HERD_P32_CHAU1V000/example.vcd Then, the execution of the add test of isa-tests can be viewed using GTKWave:\ngtkwave sim/vcd/HERD_P32_CHAU1V000/example.vcd   Note More information about the build process and the possibility to build specific hardware modules are available on the dedicated page.\n  Executable options    Command Value Description     –boot BOOT_HEX_FILE Mandatory. Initializes the content of the BOOT memory with the BOOT_HEX_FILE. BOOT_HEX_FILE must have hexadecimal values, with bytes separated by spaces.   –rom ROM_HEX_FILE Initializes the content of the ROM memory with the ROM_HEX_FILE. ROM_HEX_FILE must have hexadecimal values, with bytes separated by spaces.   –trigger N_TRIGGER Enables a trigger to stop the execution after N_TRIGGER cycles.   –uart-cycle UART_CYCLE Indicates for the UART host the number UART_CYCLE of cycles by bit.   –uart-in UART_IN_FILE Enables the UART host emitter to read UART_IN_FILE word by word and send the value to the system.   –uart-out  Displays each byte received from the UART.   –vcd VCD_FILE Enables the generation of a .vcd file at the VCD_FILE path. This file describes the evolution of each signals during the execution.   –etd ETD_FILE Enables the generation of a .etd file at the ETD_FILE path. This file indicates information for each completely executed information.   –hpc  Display HPC values for each core.    Table 1: Summary of the different executable options.  They are used to enable/disable some information generations.    Each generated executable has several options. They are summarized in the Table 1. They are implemented using C++. In the case of the Cheese platform, you can find this top file in the corresponding folder.\nExamples With the different options, the executable can used in different scenarios. It can be for a simple test, to extract some information about an execution, to understand computer architecture … Here are described some use cases.\nSimple simulation Custom design simulation ",
    "description": "",
    "tags": null,
    "title": "Simulation",
    "uri": "/en/all/sim/index.html"
  },
  {
    "content": "  Name origin Image's source.  Abondance is a french breed of cows from the Haute-Savoie in the south-east of France. It is mainly raised for its milk used in multiple cheeses like the Reblochon, the Abondance and others.\n  This page and the following ones describe the Abondance core. It is a multiple issue out-of-order CPU with two levels of cache memories.\nOverview   \nFigure 1: Overview of the the Abondance core.  All the possible stages and units are represented, even if some of them are optional.    The Figure 1 represents the whole Abondance core. It is composed of 10 parts. The Front-End is responsible for the instruction fetch. The NLP is used to predict control-flow changes. The Back-End is responsible for the decoding and the execution management. It also integrates renaming mechanisms used by multiple units for integers. The INT is responsible for the execution of integer operation. The LSU is responsible for the execution of integer memory operations. The Hardware Field Unit (HFU) is an execution unit dedicated to field management (CHAMP ISA). The I/O module is used for core’s specific memory addressable mechanism (e.g. privileged timers). L1I, L1D and L2 are respectively the Level 1 Instruction, Level 1 Data and the Level 2 (Instruction and Data) private cache memories.\nISA support The Abondance core is based on the RISC-V ISA. It currently supports both 32 and 64 bits bases.\n   Extension Version Implemented ? Tested ? Optional ? Dependencies     M 2.0       A 2.1       B 1.0.0       Zicsr        Zicntr        Zifencei 2.0        Table 1: Summary of the different supported RISC-V extensions by the Abondance core.  Some still have to be tested more in depth.    As described on the Table 1, multiple extensions are currently implemented in the Abondance. Most of them are optional: the dedicated hardware parts are completely removed during Verilog generation.\n Warning If both 32 and 64 bits are implemented, only 32 bits version is currently used and tested. More work is needed to verify 64 bit specific instructions, like ones dedicated to word-size datas.\n  Table of contents  ",
    "description": "",
    "tags": null,
    "title": "Abondance core",
    "uri": "/en/doc/hw/cores/abondance/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "I/Os",
    "uri": "/en/doc/hw/io/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "ISA tests",
    "uri": "/en/doc/sw/isa-tests/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Memories",
    "uri": "/en/doc/hw/mem/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Software",
    "uri": "/en/doc/sw/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "SPI",
    "uri": "/en/doc/hw/io/spi/index.html"
  },
  {
    "content": "  Warning Before trying to implement any design, make sure that you installed the different needed tools as explained in the installation page. Particularly, the following ones will be used here:\n sbt, Vivado, Verilator.    ",
    "description": "",
    "tags": null,
    "title": "FPGA",
    "uri": "/en/all/fpga/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "I2C",
    "uri": "/en/doc/hw/io/i2c/index.html"
  },
  {
    "content": "This page gives some information to help you in adapting HerdWare to your own needs. Here are described some use cases, but this list is non-exhaustive: do not hesitate to ask your question on the GitHub issue page.\nGenerate a precise hardware module It is possible to generate the Verilog of any hardware module of the project. First, you have to locate in which file is placed the corresponding Chisel3 class. Open the file and ensure that the corresponding structure to generate the Verilog is present:\nobject Example extends App {  (new chisel3.stage.ChiselStage).emitVerilog(new Example(4), args) } In our case, we select the Example Module in the example.scala file. The module is placed in the herd.draft.example package (indicated at the beginning of the file). Then, to generate the corresponding Verilog, go to the root of the project and launch:\nsbt \"runMain herd.draft.example.Example --target-dir output\" –target-dir output indicates to generate the files in the output/ folder. Finally, the output/Example.v file has been created.\nCreate a platform configuration Some platform configurations are already available. However, it can be interesting to create one with your own needs.\nFor the Cheese platform, the different configurations are placed in src/main/scala/configs/. To create your own configuration, copy the P32AU1V000.scala file and give it a new name. Do the same change everywhere in the file itself with the name of the classes (CheeseParams* and CheeseConfig*). It is in this file that you will be able to customize the platform. Do not forget the dedicated object for Verilog generation (Cheese*):\nobject CheeseP32AU1V000 extends App {  (new chisel3.stage.ChiselStage).emitVerilog(new Cheese(new CheeseConfigP32AU1V000(debug = false)), args) } In this case, debug value is indicated directly in the generator object.\nFinally, to generate the corresponding Verilog, adapt one of the following commands with your configuration name:\nsbt make  sbt \"runMain herd.pltf.cheese.CheeseP32AU1V000 --target-dir output\"   make cheese-build ISA_CFG=P32 HW_CFG=AU1V000      Note Let’s consider the design HERD_P32_CHAU1V000. The corresponding Cheese configuration name is P32AU1V000.\nBasically, current configurations are named respecting the following format:\n P: the used privileged ISA, P for RISC-V Privileged ISA or C for CHAMP ISA. 32: the data size, here 32 bits. AU1: the implemented cores and their number, here 1 Aubrac core. V000: the version with an arbitrary number to indicate internal details. (d): the version has debug enabled, here no.  Currently, instantiated designs are named following the template HERD_${ISA}_${HW}, with ${ISA} and ${HW} respectively the ISA and hardware indications: When talking about the whole final system, new indications are then added for the platform: the format HERD_${ISA}_${HW} is used, with ${ISA} and ${HW} respectively the ISA and hardware indications. Finally, are added:\n HERD: the herd-ware prefix. CH: the hardware platform, here Cheese.    Create a platform simulator To generate an executable for simulation, few extra-steps are needed. First, copy and modify a configuration in the src/test/scala/configs/ folder. It allows to create the corresponding object for the simulator. In the new file, make sure that debug is enabled everywhere.\nFinally, to generate the executable, adapt the following command:\nmake cheese-sim ISA_CFG=P32 HW_CFG=AU1V000 For unit test support, do not forget to copy and modify a file test in hw/pltf/cheese/sim/isa-tests. The expected format is:\n 1st column: the name of the tests, 2nd column: the expected number of retired instructions, 3nd column: the expected number of execution cycles. You must also add a new configuration in the configs.h file. Finally, after compiling the tests in sw/isa-tests, run:  make cheese-test ISA_CFG=P32 HW_CFG=AU1V000 Add custom hardware (draft) Add custom hardware (submodule) ",
    "description": "",
    "tags": null,
    "title": "Custom design",
    "uri": "/en/all/hw/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Platforms",
    "uri": "/en/doc/hw/pltf/index.html"
  },
  {
    "content": "Protocol Keyboard Top ",
    "description": "",
    "tags": null,
    "title": "PS/2",
    "uri": "/en/doc/hw/io/ps2/index.html"
  },
  {
    "content": "v0.0.1 - 2023-03-30  Public documentation on GitHub. Public designs on GitHub:  Common hardware (v0.0.1), Aubrac core (v0.0.1), Abondance core (v0.0.1), Hay cache memory (v0.0.1), I/Os (v0.0.1), Cheese platform (v0.0.1), root directory (v0.0.1), isa-tests software (v0.0.1).    ",
    "description": "",
    "tags": null,
    "title": "History",
    "uri": "/en/all/history/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Timers",
    "uri": "/en/doc/hw/io/timers/index.html"
  },
  {
    "content": "Contributors  Mathieu Escouteloup  Contact If you have any question or comment about the project, designs or current developments, do not hesitate to send an email. For particular technical issues, feel free to create a dedicated issue on the corresponding GitHub project (e.g. root issues).\n",
    "description": "",
    "tags": null,
    "title": "About",
    "uri": "/en/more/about/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Publications",
    "uri": "/en/more/publi/index.html"
  },
  {
    "content": "Table of contents  Table of contents Digital system design and tools Instruction Set Architecture Processor microarchitecture \u0026 design Microarchitecture isolation Power \u0026 electromagnetic side-channels  Digital system design and tools [Chisel]: Chisel/FIRRTL Hardware Compiler Framework   2023 Link    Notes:   [Verilator]: Verilator  Snyder, Wilson 2022 Link    Notes:   Instruction Set Architecture [Patt2017]: Computer Organization and Design RISC-V Edition: The Hardware Software Interface  Patterson, David A. and Hennessy, John L. April 2017   Notes:   [Wate2019]: The RISC-V Instruction Set Manual Volume I: Unprivileged ISA  Waterman, Andrew and Asanovic, Krste December 2019 Link    Notes:   [Wate2021]: The RISC-V Instruction Set Manual Volume II: Privileged Architecture  Waterman, Andrew and Asanovic, Krste December 2021 Link    Notes:   Processor microarchitecture \u0026 design [Henn2011]: Computer Architecture: A Quantitative Approach  Hennessy, John L. and Patterson, David A. September 2011   Notes:   Microarchitecture isolation [Ge2018a]: No Security Without Time Protection: We Need a New Hardware-Software Contract  Ge, Qian and Yarom, Yuval and Heiser, Gernot 9th Asia-Pacific Workshop on Systems (APSys'18), 2018 Link    Notes:   [Koch2019]: Spectre Attacks: Exploiting Speculative Execution  Kocher, Paul and Horn, Jann and Fogh, Anders and Genkin, Daniel and Gruss, Daniel and Haas, Werner and Hamburg, Mike and Lipp, Moritz and Mangard, Stefan and Prescher, Thomas and Schwarz, Michael and Yarom, Yuval 40th IEEE Symposium on Security and Privacy (S\u0026P'19), May 2019 Link    Notes: There is a note.   [Lipp2018]: Meltdown: Reading Kernel Memory from User Space  Lipp, Moritz and Schwarz, Michael and Gruss, Daniel and Prescher, Thomas and Haas, Werner and Fogh, Anders and Horn, Jann and Mangard, Stefan and Kocher, Paul and Genkin, Daniel and Yarom, Yuval and Hamburg, Mike 27th USENIX Security Symposium (USENIX Security'18), August 2018 Link    Notes:   [Van2018]: Foreshadow: Extracting the Keys to the Intel SGX Kingdom with Transient out-of-Order Execution  Van Bulck, Jo and Minkin, Marina and Weisse, Ofir and Genkin, Daniel and Kasikci, Baris and Piessens, Frank and Silberstein, Mark and Wenisch, Thomas F. and Yarom, Yuval and Strackx, Raoul 27th USENIX Security Symposium (USENIX Security'18), August 2018   Notes:   [Weis2018]: Foreshadow-NG: Breaking the Virtual Memory Abstraction with Transient out-of-Order Execution  Weisse, Ofir and Van Bulck, Jo and Minkin, Marina and Genkin, Daniel and Kasikci, Baris and Piessens, Frank and Silberstein, Mark and Strackx, Raoul and Wenisch, Thomas F. and Yarom, Yuval 2018   Notes:   Power \u0026 electromagnetic side-channels [Mars2021a]: MIRACLE: MIcRo-ArChitectural Leakage Evaluation: A Study of Micro-Architectural Power Leakage across Many Devices  Marshall, Ben and Page, Dan and Webb, James November 2021   Notes:   ",
    "description": "",
    "tags": null,
    "title": "References",
    "uri": "/en/refs/index.html"
  },
  {
    "content": " BHT: Branch History Table  Definition:   BTB: Branch Target Buffer  Definition:   EDA: Electronic Design Automation  Definition:   HDL: Hardware Description Language  Definition:   ISA: Instruction Set Architecture  Definition:   NLP: Next Line Predictor  Definition:   RAS: Return Address Stack  Definition:   See also:  RSB  RSB: Return Stack Buffer  Definition:   See also:  RAS  ",
    "description": "",
    "tags": null,
    "title": "Glossary",
    "uri": "/en/gls/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/en/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/en/tags/index.html"
  }
]
