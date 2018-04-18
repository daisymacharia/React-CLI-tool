## Learning Map Front End CLI
CLI tool for React applications

<!-- Badges section here. -->

## Prerequisites

The CLI has dependencies that require the latest version of Node.  

## Table of Contents

* [Installation](##installation)
* [Usage](##usage)
* [Generating Components, Actions, Reducers, Fixtures and Interfaces](##generating-components,-actions,-reducers,-fixtures-and-interfaces)
* [Note](##note)

## Installation
**BEFORE YOU INSTALL:** please read the [prerequisites](#Prerequisites)
```
npm install -g lm-fend-react-cli
```
## Usage
```
lm-fend help
```

## Generating Components, Actions, Reducers, Fixtures and Interfaces

You can use the `lm-fend create` (or just `lm-fend c`) command to generate react files:

```
lm-fend create component new-component
lm-fend c component new-component
```

You can find all possible blueprints in the table below:

File type  | Usage
---       | ---
Stateful Component | `lm-fend create component new-component` OR `lm-fend create component new-component --mode=stateful`
Functional Component | `lm-fend create component new-component --mode=functional`
Action | `lm-fend create action new-action`
Reducer           | `lm-fend create reducer new-reducer`
Interface    | `lm-fend create interface new-interface`
Fixtures        | `lm-fend create fixtures new-fixtures`

## Note:
- components are generated in the path `src/components`.
- actions are generated in the path `src/actions`.
- reducers are generated in the path `src/reducers`.
- fixtures are generated in the path `src/fixtures`.
- interfaces are generated in the path `src/interfaces`.
