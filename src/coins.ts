import axios from 'axios';

export class getPolo{
    constructor(){
        axios.get("https://google.com").then((res) => {
            this.getJson(res);
        }).catch(err => {
            console.log("Deu um error aqui.");
            console.log(err);
        });
    }
    getJson(value): void {
        //return JSON.parse(this.result);
        console.log(value.status);
        
    }
}

const teste = new getPolo();