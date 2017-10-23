#!/usr/bin/env node

import * as yargs from "yargs";
import { green, red } from "colors/safe";
import { getPolo } from './coins';
import { BittrexApi } from './bittrexApi';

//export const emitSuccess = message => console.log(green(`${message} ✔ Passou`));
//export const emitError = message => console.log(red(`${message} Error`));


export class cli{
    constructor() {
        this.cli(
            yargs.usage('Uso $0 --coin <coin> --exchange <exchange>')
                 .options({
                    'coin': {
                        describe: 'Informe a criptomoeda desejada!',
                        type: 'string'
                     },
                     'exchange': {
                         describe: 'Informe a exchange desejada! (poloniex ou bittrex)',
                         type: 'string'
                     }
                 })
                  .demandOption(['coin','exchange'])
                  .locale('pt_BR')
                  .strict()
                  .help()
                  .version()
                  .argv
                )
    }
    cli(args) {
        if(args.coin && args.exchange) {
            //Getting ticker from polo
            if(args.exchange.toLowerCase() === 'polo' || args.exchange.toLowerCase() === 'poloniex'){
                const coinPolo = new getPolo();
                coinPolo.getCoin(args.coin.toUpperCase());
            }
            //Getting ticker from bittrex
            else if(args.exchange.toLowerCase() === 'bittrex'){
                let bittrexApi = new BittrexApi();
                bittrexApi.getTicker(args.coin);
            }
            else{
                console.log(red('Exchange not supported yet.'));
            }
        }
    }
}
const clii = new cli();