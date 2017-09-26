import axios from 'axios';

export class teste{
    constructor(){
        axios.get("https://google.com").then(res => {
            console.log(res);
        });
    }
}

const aaa = new teste();