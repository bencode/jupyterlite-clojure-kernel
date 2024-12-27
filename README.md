# JupyterLite Clojure Kernel

A Clojure kernel for JupyterLite powered by [sci](https://github.com/babashka/sci) —— Small Clojure Interpreter, enabling Clojure code execution directly in the browser.

## Eamples

- [Using Clojure in JupyterLite](https://www.qijun.io/notebooks/index.html?path=using-clojure-in-jupyterlite.ipynb)

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

## Development

### 1. build sci-npm

``` shell
cd packages/sci-npm
pnpm install
pnpm build
```

### 2. build kernel

``` shell
cd packages/jupyterlite-clojure-kernel
pnpm install
# pnpm watch # for develop
pnpm build
```

### 3. serve jupyterlite

``` shell
# cd $projectroot
pip install jupyterlab jupyterlite
t
pnpm install
pnpm dev:install
pnpm dev:build

python -m http.server --directory _output
```


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
