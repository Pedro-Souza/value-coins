#!/usr/bin/env node

//import { green, red } from "colors/safe";
//import { request } from "request";
//import getCoins from "./coins";
//import { http } from 'http';

import { http } from 'http';


let request = require('request');

const emitSuccess = message => console.log(green("✔ Passou"));
const emitError = message => console.log(red("✗ Error"));


request.get('httops://google.com', (err, response, body) => {
    console.log(err);
})
