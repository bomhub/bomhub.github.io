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
    Qty: 2
    Value: "10R/Ferrite"
    Parts: "F1, F2"
-
    Qty: 1
    Value: "100R"
    Parts: "RS3"
    Comments: "optional"
-
    Qty: 1
    Value: "390R"
    Parts: "R1"
-
    Qty: 2
    Value: "470R"
    Parts: "R2, R3"
-
    Qty: 1
    Value: "820R"
    Parts: "R4"
-
    Qty: 4
    Value: "100k"
    Parts: "R42, R43, R44, R45"
-
    Qty: 3
    Value: "1k"
    Parts: "R5, R6, R9"
-
    Qty: 1
    Value: "1k8"
    Parts: "R7"
-
    Qty: 5
    Value: "2k"
    Parts: "R8, R8_B, R10, R15, R15_B"
-
    Qty: 2
    Value: "2k2"
    Parts: "R11, R12"
-
    Qty: 1
    Value: "3k"
    Parts: "RS2"
    Comments: optional
-
    Qty: 2
    Value: 4k7
    Parts: R13, R14
-
    Qty: 2
    Value: 5k6
    Parts: R16, R17
-
    Qty: 12
    Value: 10k
    Parts: R18, R19, R20, R21, R22, R23, R24, R25, R26, R26_B, R27, R27_B
-
    Qty: 1
    Value: 11k
    Parts: RS1
    Comments: (optional)
-
    Qty: 1
    Value: 15k
    Parts: R30
-
    Qty: 1
    Value: 18k
    Parts: R31
-
    Qty: 3
    Value: 20k
    Parts: R32, R33, R34
-
    Qty: 1
    Value: 22k
    Parts: R35
-
    Qty: 1
    Value: 24k
    Parts: R36
-
    Qty: 1
    Value: 30k
    Parts: R37
-
    Qty: 2
    Value: 47k
    Parts: R38, R39
-
    Qty: 1
    Value: 120k
    Parts: R53
-
    Qty: 2
    Value: 300k
    Parts: R54, R55
-
    Qty: 4
    Value: 1M
    Parts: R56, R57, R58, R59
-
    Qty: 1
    Value: 1M5
    Parts: R60
-
    Qty: 1
    Value: 3M3
    Parts: R61
-
    Qty: 1
    Value: 10M
    Parts: R62
-
    Qty: 2
    Value: 50k
    Parts: R40, R41
    Comments: (Trimmer S64Y)
-
    Qty: 2
    Value: 10k
    Parts: R28, R29
    Comments: (Trimmer S64Y)
-
    Qty: 2
    Value: 22pF
    Parts: C1, C1_B
-
    Qty: 1
    Value: 33pF
    Parts: C2
-
    Qty: 1
    Value: 47pF
    Parts: C3
-
    Qty: 1
    Value: 1n
    Parts: C6
-
    Qty: 1
    Value: 1n
    Parts: poly C4
    Comments: (polystyrene or C0G)
-
    Qty: 2
    Value: 10n
    Parts: C7, C8
    Comments: film
-
    Qty: 13
    Value: 100n
    Parts: C5, C9, C10, C11, C12, C14, C15, C16, C17, C18, C19. C20, CS
    Comments: "CS is optional"
-
    Qty: 1
    Value: 220n
    Parts: C21
    Comments: film
-
    Qty: 2
    Value: 10uF
    Parts: C22, C23
    Comments: elec
-
    Qty: 2
    Value: 1N4001
    Parts: DP1, DP2
    Comments: "optional: reverse voltage protection"
-
    Qty: 1
    Value: 1N4148
    Parts: D1
-
    Qty: 2
    Value: 2N3904
    Parts: Q1, Q2
-
    Qty: 1
    Value: CEM3340
    Parts: IC1
-
    Qty: 1
    Value: CD4070
    Parts: IC2
-
    Qty: 1
    Value: CD4013
    Parts: IC3
-
    Qty: 3
    Value: TL072
    Parts: IC4, IC5, IC6
    Comments: (or compatible OpAmp)
-
    Qty: 1
    Value: TL431
    Parts: VR1
    Comments: (optional)
-
    Qty: 10
    Value: Jack
    Parts: Sockets type PJ301-BM
-
    Qty: 7
    Value: Potentiometer
    Parts: 9mm vertical B100k
    Comments: (i.e Alpha)
-
    Qty: 3
    Value: Miniature
    Parts: Switch SPDT on-on
-
    Qty: 1
    Value: Miniature
    Parts: Switch DPDT on-on
-
    Qty: 4
    Value: Standoffs
    Parts: (M3)
-
    Qty: 1
    Value: 2x5
    Parts: pole boxed Eurorack power-header
-
    Qty: 2
    Value: 1x16
    Parts: SIL socket/header
    Comments: (female/male, 2.54 pitch)
-
    Qty: 2
    Value: 1x20
    Parts: SIL socket/header
    Comments: (female/male, 2.54 pitch)
-
    Qty: 1
    Value: 2x5
    Parts: pole boxed Eurorack power-header, or MTA-156
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