#!/usr/bin/env node

import * as yargs from "yargs";
import { green, red } from "colors/safe";
import { getPolo } from './coins';

//export const emitSuccess = message => console.log(green(`${message} ✔ Passou`));
//export const emitError = message => console.log(red(`${message} Error`));


export class cli{
    constructor() {
        this.cli(
            yargs.usage('Uso $0 --coin <coin>')
                 .option('coin', {
                     describe: 'Informe a criptomoeda desejada!',
                     type: 'string'
                  })
                  .demandOption(['coin'])
                  .locale('pt_BR')
                  .strict()
                  .help()
                  .version()
                  .argv
                )
    }
    cli(args) {
        if(args.coin) {
            const coin = new getPolo();
            coin.getCoin(args.coin.toUpperCase());
        }
    }
}
const clii = new cli();