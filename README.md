# AHK Neptun check GitHub Action

Checks if a a neptun.txt exists and it has Neptun code looking content.

## Usage

```yml
on: [push]

jobs:
  job1:
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout
        uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - name: Check neptun.txt
        uses: akosdudas/ahk-action-neptuncheck@v1
```

## Development

Requirements:

- NodeJS
- Yarn

Development process:

1. `yarn install`
1. code
1. `yarn run build`
1. push
