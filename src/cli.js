#!/usr/bin/env node

import { green, red } from "colors/safe";

const emitSuccess = message => console.log(green("✔ Passou"));
const emitError = message => console.log(red("✗ Error"));

emitError();
emitSuccess();