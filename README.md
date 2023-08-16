# Example: Typescript utility library

## Prerequisites

### Tools

You will need the following things properly installed on your computer.

- [Git](http://git-scm.com/downloads)
- [Node.js](http://nodejs.org/)

### PNPM install

- If you have installed latest v16.x or greater node version in your system, then enable the pnpm using the below cmd

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

- If you are using lower version of node in your local system then check this page for additional installation methods https://pnpm.io/installation

## Usage

### Install packages

```
pnpm install
```

### To start the library in the dev mode

```
pnpm dev
```

and visit http://localhost:5173

### To build the library

```
pnpm build
```

### To run the linter

```
pnpm lint
```

### To format the files

```
pnpm format
```

## To run all the tests

```
pnpm test
```

## To run all the tests with coverage

```
pnpm test:coverage
```

## To run a single test matching the pattern

```
pnpm test -- -t 'add'
```

We can use any options provided by jest after the '--'. This way the arguments will be passed to the jest executor.
