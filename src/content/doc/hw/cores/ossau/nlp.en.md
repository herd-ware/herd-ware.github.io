---
archetype: "chapter"
title: "Next-line predictor (NLP)"
menuTitle: "NLP"
weight: 2
---

### Overview

{{< fig 
  fig="/fig/nlp.png"
  alt="Table" 
  width=400px   
  x="1"
  caption="Overview of the NLP."
  subcaption="Each cycle, the Front-End requests the NLP to have informations about the next PC. If it corresponds to a known taken branch or jump, the NLP specute on the following PC."
>}}

### Internal components




#### Branch Target buffer (BTB)

{{< fig 
  fig="/fig/btb.png"
  alt="Table" 
  width=200px   
  x="1"
  caption="Description of the BTB's working."
  subcaption="When a jump or branch is detected, its informations are stored in the BTB. Later, before fetching the PC, the BTB is read to anticipate potential control flow change using available informations."
>}}

#### Branch History Table (BHT)

{{< fig 
  fig="/fig/bht-fsm.png"
  alt="Table" 
  width=200px   
  x="2"
  caption="Principle of the BHT's finite state machine."
  subcaption="Each new branch updates the counter which indicates if the last ones were mainly taken or not-taken."
>}}

{{< fig 
  fig="/fig/bht-top.png"
  alt="Table" 
  width=250px   
  x="3"
  caption="Description of the BHT's working."
  subcaption="The LSBs of the address of each branch lead to a particular counter. Depending on its MSB value, the BHT can indicate if a branch must be taken* or not-taken."
>}}

#### Return Stack Buffer (RSB)

{{< fig 
  fig="/fig/rsb.png"
  alt="Table" 
  width=250px   
  x="4"
  caption="Description of the BHT's working."
  subcaption="When a call is detected, the PC of the following instruction (basically PC + 4) is stored on top of the RSB, and the pointer is encremented. When a return is detected, the last value on the RSB is returned, and the pointer is decremented."
>}}

