# JupyterLite Clojure Kernel

A Clojure kernel for JupyterLite powered by [sci](https://github.com/babashka/sci) —— Small Clojure Interpreter, enabling Clojure code execution directly in the browser.

## Features

- Browser-based Clojure REPL
- No server-side dependencies
- Core Clojure functions support

## Installation

```bash
pip install jupyterlite-clojure-kernel-canary
```

## Usage

1. Install JupyterLite
2. Add the Clojure kernel
3. Create a new notebook with Clojure kernel

## Examples

```clojure
;; Basic calculations
(+ 1 2 3)

;; Define functions
(defn square [x] (* x x))

;; Data structures
(def data {:name "Alice" :scores [98 92 85]})
```

## License

MIT
