# AHK Neptun check GitHub Action

Checks if a a neptun.txt exists and it has Neptun code looking content.

## Sample usage

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
        uses: akosdudas/ahk-action-neptuncheck@master
```
