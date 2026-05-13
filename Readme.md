```
tmpl/
│
├── layout.tmpl                    (no partials — entry wrapper)
├── tutorial.tmpl                  (no partials)
├── mainpage.tmpl                  (no partials)
├── source.tmpl                    (no partials)
│
└── container.tmpl
    ├── mainpage.tmpl *
    ├── source.tmpl *
    ├── augments.tmpl
    ├── namespace.tmpl
    │   ├── augments.tmpl *
    │   ├── type.tmpl
    │   ├── modifies.tmpl
    │   ├── exceptions.tmpl
    │   └── returns.tmpl
    ├── details.tmpl
    ├── examples.tmpl
    ├── members.tmpl
    │   └── type.tmpl *
    └── method.tmpl
        ├── augments.tmpl *
        ├── type.tmpl *
        ├── modifies.tmpl *
        ├── exceptions.tmpl *
        └── returns.tmpl *
 

│
│   Self-referencing (recursive):
├── params.tmpl ──► params.tmpl    (recurses for nested subparams)
│       └── type.tmpl *
└── properties.tmpl ──► properties.tmpl  (recurses for nested props)
        └── type.tmpl *


* = node already shown above; not re-expanded
```