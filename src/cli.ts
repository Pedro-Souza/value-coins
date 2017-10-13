#!/usr/bin/env node
import * as yargs from "yargs";
import { green, red } from "colors/safe";
import { getPolo } from './coins';

export const emitSuccess = message => console.log(green(`${message} ✔ Passou`));
export const emitError = message => console.log(red(`${message} Error`));


export class cli{
    constructor() {
        console.log("Me construiu");
        this.cli(
            yargs.usage('Uso $0 --coin <coin>')
                 .option('coin', {
                     describe: 'Informe a criptomoeda desejada!',
                     type: 'string'
                  }).option('teste', {
                      describe: 'Mais um teste',
                      type: 'string'
                  })
                  .demandOption(['coin']).locale('pt_BR').strict().help().version().argv
                )
    }
    cli(args) {
        if(args.coin) {
            console.log("aqui => " + args.coin);
            const tt = new getPolo();
        }
    }
}
const lul = new cli();