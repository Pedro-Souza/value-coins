#!/usr/bin/env node

import * as yargs from "yargs";

import { green, red } from "colors/safe";

import { GetPolo } from "./coins";

import { BittrexApi } from "./bittrexApi";

export class Cli {
    constructor() {
        this.cli(
            yargs.usage("Uso $0 --coin <coin> --exchange <exchange>")
                 .options({
                    "coin": {
                        describe: "nforme a criptomoeda desejada!",
                        type: "string",
                    },
                    'exchange': {
                        describe: "Informe a exchange desejada! (poloniex ou bittrex)",
                        type: "string",
                    },
                    'all': {
                        describe: "For all exchanges.",
                    },
                 })
                  .demandOption(["coin"])
                  .locale("pt_BR")
                  .strict()
                  .help()
                  .version()
                  .argv,
                );
    }
    public cli(args): void {
        if (args.coin && args.exchange) {
            // Getting tickerlink  from polo
            if (args.exchange.toLowerCase() === "polo" || args.exchange.toLowerCase() === "poloniex") {
                const coinPolo = new GetPolo();
                coinPolo.getCoin(args.coin.toUpperCase());
            } else if (args.exchange.toLowerCase() === "bittrex") {
                // Getting ticker from bittrex
                const bittrexApi = new BittrexApi();
                bittrexApi.getTicker(args.coin);
            } else {
                console.log(red("Exchange not supported yet."));
            }
        } else if (args.coin && args.all) {
            const bittrex = new BittrexApi();
            bittrex.getTicker(args.coin);
            const polo: GetPolo = new GetPolo();
            polo.getCoin(args.coin.toUpperCase());
        }
    }
}
const clii = new Cli();
