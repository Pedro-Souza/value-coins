#!/usr/bin/env node

import * as yargs from "yargs";
import { green, red } from "colors/safe";
import { getPolo } from './coins';
import { BittrexApi } from './bittrexApi';

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
                     },
                     'all': {
                         describe: 'For all exchanges.'
                     }
                 })
                  .demandOption(['coin'])
                  .locale('pt_BR')
                  .strict()
                  .help()
                  .version()
                  .argv
                )
    }
    cli(args): void {
        if(args.coin && args.exchange) {
            //Getting tickerlink  from polo
            if(args.exchange.toLowerCase() === 'polo' || args.exchange.toLowerCase() === 'poloniex'){
                const coinPolo = new getPolo();
                coinPolo.getCoin(args.coin.toUpperCase());
            }
            //Getting ticker from bittrex
            else if(args.exchange.toLowerCase() === 'bittrex'){
                let bittrexApi = new BittrexApi();
                bittrexApi.getTicker(args.coin);
            } else if (args.all){
                console.log("Chamou o all")
            }
            else{
                console.log(red('Exchange not supported yet.'));
            }
        } else if(args.coin && args.all){
            let bittrex = new BittrexApi();
            bittrex.getTicker(args.coin);
            let polo = new getPolo();
            polo.getCoin(args.coin.toUpperCase());
        }
    }
}
const clii = new cli();