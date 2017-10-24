import axios from 'axios';
import { green, red } from "colors/safe";

export class getPolo{
    url: string = "https://poloniex.com/public?command=returnTicker";
    constructor(){
    }
    getCoin(value) {
        axios.get(this.url).then(res => {
            console.log(red("[!] Poloniex [+]"));
            console.log(green("Valor => " + res.data[`BTC_${value}`]['last']));
            console.log(green("Menor valor => " + res.data[`BTC_${value}`]['low24hr']));
            console.log(green("Volume => " + res.data[`BTC_${value}`]['baseVolume']));
            console.log(green("low24hr => " + res.data[`BTC_${value}`]['low24hr']));
        }).catch(err => {
            console.log(err);
        })
    }
}
