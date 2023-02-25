---
archetype: "page"
title: "Memory mapping"
menuTitle: "Mapping"
weight: 2
---

<table style="font-weight: bold;">
   <thead>
      <tr>
         <th>Category</th>
         <th>Name</th>
         <th style="font-family: monospace">Address</th>
      </tr>
   </thead>

   <tr style="background-color:#999999;">
      <td rowspan="2">BOOT</td>
      <td>Start</td>
      <td style="font-family: monospace">0x00000000</td>
   </tr>
   <tr style="background-color:#999999;">
      <td>End</td>
      <td style="font-family: monospace">0x03ffffff</td>
   </tr>

   <tr style="background-color:#f2f2f2;">
      <td rowspan="2">ROM</td>
      <td>Start</td>
      <td style="font-family: monospace">0x04000000</td>
   </tr>
   <tr style="background-color:#f2f2f2;">
      <td>End</td>
      <td style="font-family: monospace">0x07ffffff</td>
   </tr>

   <tr style="background-color:#999999;">
      <td rowspan="2">RAM</td>
      <td>Start</td>
      <td style="font-family: monospace">0x08000000</td>
   </tr>
   <tr style="background-color:#999999;">
      <td>End</td>
      <td style="font-family: monospace">0x0cffffff</td>
   </tr>

   <tr style="background-color:#f2f2f2;">
      <td rowspan="2">Core I/Os</td>
      <td>Start</td>
      <td style="font-family: monospace">0x10000000</td>
   </tr>
   <tr style="background-color:#f2f2f2;">
      <td>End</td>
      <td style="font-family: monospace">0x17ffffff</td>
   </tr>

   <tr style="background-color:#999999;">
      <td rowspan="2">Platform I/Os</td>
      <td>Start</td>
      <td style="font-family: monospace">0x18000000</td>
   </tr>
   <tr style="background-color:#999999;">
      <td>End</td>
      <td style="font-family: monospace">0x1fffffff</td>
   </tr>



</table> 
