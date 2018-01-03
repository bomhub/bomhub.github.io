---
layout: module
modname: rot8
tags: sequencer
size: 16hp,eurorack
designer: Antumbra
bom: https://docs.google.com/spreadsheets/d/1ZlkaEB3m_ctY6hpmqH9omsNE39LGJ6li2zAmPW41hkA/edit#gid=974310588
buildguide: http://antumbra.eu/content/1-modules/1-rot8/ROT8_build_v1_1.pdf
modulargrid: https://www.modulargrid.net/e/antumbra-rot8
---

## Build guide

 * Check that the holes for the jack LED's are there before you start populating the board - if not, carefully drill them.
 * Programmed with `avrdude -c usbtiny -p atmega328p -U flash:w:ROT8_V1_1_with_bootloader.hex -U lfuse:w:0xff:m
 -U hfuse:w:0xde:m -U efuse:w:0x05:m`
