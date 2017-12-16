---
layout: default
---
Bom Hub is meant to be a community resource for modular DIY enthusiasts. As such it relies on contributions from those that use it in terms of knowledge.

# How you can help

 * file [issues][issues] - see a mistake? let us know
 * submit pull requests which
    * add designers
    * add modules
    * add tips

## Adding designers

Adding a designer should be as simple as making a new folder for the designer and adding an index.md with the following content:

```
---
layout: designer
designer: Name of the designer
---
```

Any content (markdown or html) underneath that header (after teh second `---`) will be rendered on the designers page, along with all the modules that are listed as being theirs.

## Adding modules

Each module should be its own markdown file, in the folder of its designer. Modules have more complex metadata (the header between the `---`), some of which is required, other optional. 

```
---
layout: module [REQUIRED]
modname: klik [REQUIRED]
tags: sequencer,trigger
size: 4hp,eurorack
designer: Antumbra [REQUIRED]
homepage: http://www.antumbra.eu/modules/klik
build:
 - v1.3: 
   - bom:  https://eu.mouser.com/ProjectManager/ProjectDetail.aspx?AccessID=316f7874f1
   - buildguide: http://www.antumbra.eu/content/1-modules/4-klik/klik_manual.pdf
 - v1.5:
   - bom: http://www.antumbra.eu/content/1-modules/4-klik/klik_manual_smd.pdf
   - buildguide:  http://www.antumbra.eu/content/1-modules/4-klik/klik_manual_smd.pdf
links:
 - modulargrid: https://www.modulargrid.net/e/antumbra-klik
buy:
 - https://modularaddict.com/manufacturer/antumbra/antumbra-klik
---
```

 * `layout`: the template used, this is required and must be `module`
 * `modname`: name of the module, required
 * `tags`: optional list of tags describing the module
 * `size`: the size of the module
 * `designer`: who designed the module, required
 * `homepage`: link to the homepage of the module
 * `build`: a hash of BOM and build guides for the module. This should contain at least a `bom` and a `buildguide`, but may be further nested for different versions of a build/module
 * `links`: more links to info about the module (Modular Grid, Muffwiggler, DivKid, Mylar...). Links which are for youtube or vimeo will be rendered into the page.
 * `buy`: links to people who sell the module 

### Adding build tips & advice
Below the modules header/metadata is where tips and build advice lives. This is free form markdown/html, so go nuts. 

# Hey, I don't want my stuff on here!
We'll happily take down (or preferably correct) any information on modules or designers. Easiest is to open a pull request removing the content, or if you don't know how file an [issue][issues]


[issues]: https://github.com/bomhub/bomhub.github.io/issues