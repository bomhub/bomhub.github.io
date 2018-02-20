---
layout: module
modname: TH VCO Maximus
tags: vco
size: 16hp,eurorack
designer: Fonitronik
build:
    bom: http://www.synthdiy.fonitronik.de/PDF/TH-VCO-MAXIMUS-doc-v1.pdf
    buildguide: http://www.synthdiy.fonitronik.de/PDF/TH-VCO-MAXIMUS-doc-v1.pdf
bomdata:
-
    qty: 2
    value: "10R/Ferrite"
    parts: "F1, F2"
-
    qty: 1
    value: "100R"
    parts: "RS3"
    comments: "optional"
-
    qty: 1
    value: "390R"
    parts: "R1"
-
    qty: 2
    value: "470R"
    parts: "R2, R3"
-
    qty: 1
    value: "820R"
    parts: "R4"
-
    qty: 4
    value: "100k"
    parts: "R42, R43, R44, R45"
-
    qty: 3
    value: "1k"
    parts: "R5, R6, R9"
-
    qty: 1
    value: "1k8"
    parts: "R7"
-
    qty: 5
    value: "2k"
    parts: "R8, R8_B, R10, R15, R15_B"
-
    qty: 2
    value: "2k2"
    parts: "R11, R12"
-
    qty: 1
    value: "3k"
    parts: "RS2"
    comments: optional
-
    qty: 2
    value: 4k7
    parts: R13, R14
-
    qty: 2
    value: 5k6
    parts: R16, R17
-
    qty: 12
    value: 10k
    parts: R18, R19, R20, R21, R22, R23, R24, R25, R26, R26_B, R27, R27_B
-
    qty: 1
    value: 11k
    parts: RS1
    comments: (optional)
-
    qty: 1
    value: 15k
    parts: R30
-
    qty: 1
    value: 18k
    parts: R31
-
    qty: 3
    value: 20k
    parts: R32, R33, R34
-
    qty: 1
    value: 22k
    parts: R35
-
    qty: 1
    value: 24k
    parts: R36
-
    qty: 1
    value: 30k
    parts: R37
-
    qty: 2
    value: 47k
    parts: R38, R39
-
    qty: 1
    value: 120k
    parts: R53
-
    qty: 2
    value: 300k
    parts: R54, R55
-
    qty: 4
    value: 1M
    parts: R56, R57, R58, R59
-
    qty: 1
    value: 1M5
    parts: R60
-
    qty: 1
    value: 3M3
    parts: R61
-
    qty: 1
    value: 10M
    parts: R62
-
    qty: 2
    value: 50k
    parts: R40, R41
    comments: (Trimmer S64Y)
-
    qty: 2
    value: 10k
    parts: R28, R29
    comments: (Trimmer S64Y)
-
    qty: 2
    value: 22pF
    parts: C1, C1_B
-
    qty: 1
    value: 33pF
    parts: C2
-
    qty: 1
    value: 47pF
    parts: C3
-
    qty: 1
    value: 1n
    parts: C6
-
    qty: 1
    value: 1n
    parts: poly C4
    comments: (polystyrene or C0G)
-
    qty: 2
    value: 10n
    parts: C7, C8
    comments: film
-
    qty: 13
    value: 100n
    parts: C5, C9, C10, C11, C12, C14, C15, C16, C17, C18, C19. C20, CS
    comments: "CS is optional"
-
    qty: 1
    value: 220n
    parts: C21
    comments: film
-
    qty: 2
    value: 10uF
    parts: C22, C23
    comments: elec
-
    qty: 2
    value: 1N4001
    parts: DP1, DP2
    comments: "optional: reverse voltage protection"
-
    qty: 1
    value: 1N4148
    parts: D1
-
    qty: 2
    value: 2N3904
    parts: Q1, Q2
-
    qty: 1
    value: CEM3340
    parts: IC1
-
    qty: 1
    value: CD4070
    parts: IC2
-
    qty: 1
    value: CD4013
    parts: IC3
-
    qty: 3
    value: TL072
    parts: IC4, IC5, IC6
    comments: (or compatible OpAmp)
-
    qty: 1
    value: TL431
    parts: VR1
    comments: (optional)
-
    qty: 10
    value: Jack
    parts: Sockets type PJ301-BM
-
    qty: 7
    value: Potentiometer
    parts: 9mm vertical B100k
    comments: (i.e Alpha)
-
    qty: 3
    value: Miniature
    parts: Switch SPDT on-on
-
    qty: 1
    value: Miniature
    parts: Switch DPDT on-on
-
    qty: 4
    value: Standoffs
    parts: (M3)
-
    qty: 1
    value: 2x5
    parts: pole boxed Eurorack power-header
-
    qty: 2
    value: 1x16
    parts: SIL socket/header
    comments: (female/male, 2.54 pitch)
-
    qty: 2
    value: 1x20
    parts: SIL socket/header
    comments: (female/male, 2.54 pitch)
-
    qty: 1
    value: 2x5
    parts: pole boxed Eurorack power-header, or MTA-156
buy:
    thonk: https://www.thonk.co.uk/shop/fonitronik-th-vco-maximus-panelpcb/
---

Features:

 * triangle, ramp, sine and pulse outputs
 * PWM
 * pulse/sub blend
 * switchable fifth/octave, add/subtract, sub/sub-sub effects
 * strong and weak sync
 * linear and exponential FM
 * 1V/octave response
 * no matched pair and/or TEMPCO resistor needed