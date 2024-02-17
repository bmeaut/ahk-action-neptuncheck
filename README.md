# Ahk Neptun check GitHub Action

Checks if a file named `neptun.txt` exists in the root of the repository and it has _Neptun code_ looking content.

Please refer to <https://akosdudas.github.io/automated-homework-evaluation/> for the "big picture."

## Usage

```yml
on: [push]

jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 1
      - name: Check neptun.txt
        uses: akosdudas/ahk-action-neptuncheck@v2
```

## What happens when added to the workflow

If the file with the required content exists, the step will be completed. Otherwise, the step will fail the workflow.

## Development

Requirements:

- NodeJS
- Yarn

Development process:

1. `yarn install`
1. code
1. `yarn run build`
1. push
