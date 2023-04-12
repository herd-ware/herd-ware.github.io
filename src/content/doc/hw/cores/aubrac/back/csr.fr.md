---
title: "Registres de Contrôle et de Statut (CSR)"
menuTitle: "CSR"
weight: 6
---

## Récapitulatif

| Nom                     | Adresse (64/32 bits)  | Adresse (32 bits) |  Description                         |
|:------------------------|:----------------------|:------------------|:-------------------------------------|
| `cycle`                 | `0xc00`               | `0xc80`           | Cycles depuis le dernier reset global. |
| `time`                  | `0xc01`               | `0xc81`           | Cycles depuis le dernier reset global. |
| `instret`               | `0xc02`               | `0xc82`           | Instructions exécutées. |
| `hpmcounter3`           | `0xc03`               | `0xc83`           | Compteur de performances 3. |
| `hpmcounter4`           | `0xc04`               | `0xc84`           | Compteur de performances 4. |
| `hpmcounter5`           | `0xc05`               | `0xc85`           | Compteur de performances 5. |
| `hpmcounter6`           | `0xc06`               | `0xc86`           | Compteur de performances 6. |
| `hpmcounter7`           | `0xc07`               | `0xc87`           | Compteur de performances 7. |
| `hpmcounter8`           | `0xc08`               | `0xc88`           | Compteur de performances 8. |
| `hpmcounter9`           | `0xc09`               | `0xc89`           | Compteur de performances 9. |
| `hpmcounter10`          | `0xc0a`               | `0xc8a`           | Compteur de performances 10. |
| `hpmcounter11`          | `0xc0b`               | `0xc8b`           | Compteur de performances 11. |
| `hpmcounter12`          | `0xc0c`               | `0xc8c`           | Compteur de performances 12. |
| `hpmcounter13`          | `0xc0d`               | `0xc8d`           | Compteur de performances 13. |
| `hpmcounter14`          | `0xc0e`               | `0xc8e`           | Compteur de performances 14. |
| `hpmcounter15`          | `0xc0f`               | `0xc8f`           | Compteur de performances 15. |
| `hpmcounter16`          | `0xc10`               | `0xc90`           | Compteur de performances 16. |
| `hpmcounter17`          | `0xc11`               | `0xc91`           | Compteur de performances 17. |
| `hpmcounter18`          | `0xc12`               | `0xc92`           | Compteur de performances 18. |
| `hpmcounter19`          | `0xc13`               | `0xc93`           | Compteur de performances 19. |
| `hpmcounter20`          | `0xc14`               | `0xc94`           | Compteur de performances 20. |
| `hpmcounter21`          | `0xc15`               | `0xc95`           | Compteur de performances 21. |
| `hpmcounter22`          | `0xc16`               | `0xc96`           | Compteur de performances 22. |
| `hpmcounter23`          | `0xc17`               | `0xc97`           | Compteur de performances 23. |
| `hpmcounter24`          | `0xc18`               | `0xc98`           | Compteur de performances 24. |
| `hpmcounter25`          | `0xc19`               | `0xc99`           | Compteur de performances 25. |
| `hpmcounter26`          | `0xc1a`               | `0xc9a`           | Compteur de performances 26. |
| `hpmcounter27`          | `0xc1b`               | `0xc9b`           | Compteur de performances 27. |
| `hpmcounter28`          | `0xc1c`               | `0xc9c`           | Compteur de performances 28. |
| `hpmcounter29`          | `0xc1d`               | `0xc9d`           | Compteur de performances 29. |
| `hpmcounter30`          | `0xc1e`               | `0xc9e`           | Compteur de performances 30. |
| `hpmcounter31`          | `0xc1f`               | `0xc9f`           | Compteur de performances 31. |

{{< caption 
  type="Tableau" 
  x="1"
  main="Description des différents CSR communs aux différentes ISA"
  sub="Pour les implémentations 64 bits, une seule instruction permet de lire l'intégralité de chaque registre. Dans le cas des implémentations 32 bits, une lecture supplémentaire est nécessaire pour lire les 32 bits de poids fort."
>}}

