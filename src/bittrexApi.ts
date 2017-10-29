import axios from 'axios';
import { green, red } from "colors/safe";

export class BittrexApi{
    
    baseUrl: string = "https://bittrex.com/api/v1.1/";

    getTicker(coin){
        let url: string = `${this.baseUrl}public/getmarketsummary?market=btc-${coin.toUpperCase()}`;
        axios.get(url).then(response => {
            if(response.data.success != true) 
                throw new Error(`Error on consulting Bittrex api url (${url}).\n' ${response.data.message}`);
            
            var result = response.data.result[0];
            console.log(red("[!] Bittrex  [+]"))
            console.log(green(`Valor => ${result.Last}`));
            console.log(green(`Menor valor => ${result.Low}`));
            console.log(green(`Volume => ${result.Volume}`));
        }).catch(err => {
            console.log(`Verifique a sua conexão com a internet`);
        });
    }

}
