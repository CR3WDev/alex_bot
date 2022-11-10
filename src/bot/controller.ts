import { Prisma, PrismaClient } from '@prisma/client'
import { Url } from 'url';
import { getCommand, getCommandFullDescription, getCommandListText, getBebidaListText, getPizzaListText} from './bot-commands';
const prisma = new PrismaClient();
var data = new Date();

declare global {
    var conta: number; 
  }
function start(){
    global.conta = 0;
}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function conta(valor: number) {
    var soma = global.conta;
    global.conta = soma + valor;
    return global.conta;
}
function horas(){
    var horas = data.getHours();
    horas = Number(horas);
    return horas; 
}


export const controller = {

    async start(telegramId: string, name: string, sendMessage: (text: string) => Promise<void>) {
        start();
        if( horas() >= 6 && horas() <= 17){
            sendMessage(`Boa dia ${name}!`)
        }
        else if(horas() >= 18 || horas() <= 5){
            sendMessage(`Boa noite ${name}!`);
        }

        await delay(500)

        sendMessage(`Seja Bem vindo ao Pizza Planet!\nO que vai querer?`);

        await delay(500)

        return sendMessage(`${getCommandListText()}`);
    },

    async combo(telegramId: string, name: string, sendMessage: (text: string) => Promise<void>) {
        sendMessage(`Então vamos ecolher o seu combo! Para isso escreva no chat \n bebida <numero da bebida> \n pizza <numero da pizza>`);
        await delay(500);
        return sendMessage(`${getPizzaListText()}`),sendMessage(`${getBebidaListText()}`);
    },

    async pizza(telegramId: string, name: string, quantity: number, sendMessage: (text: string) => Promise<void>) {
        if(quantity == 1){
            conta(38)
            return sendMessage(`Uma Pizza de Calabresa saindo no capricho!`);
        }
        else if(quantity == 2){
            conta(40)
            return sendMessage(`Uma Pizza de Pepperoni saindo no capricho!`);
        }
        else{
            return sendMessage(`Envie um numero válido!`);
        }

    },

    async pizzas(telegramId: string, name: string, quantity: number, sendMessage: (text: string) => Promise<void>) {
        sendMessage(`Então vamos ecolher a sua pizza! Para isso escreva no chat \n  pizza <numero da pizza>`),sendMessage(`Sabores de Pizza 🍕\n 1 - Pepperoni\n 2 - Calabresa\n`);
    },

    async bebida(telegramId: string, name: string, quantity: number, sendMessage: (text: string) => Promise<void>) {
        if(quantity == 1){
            conta(6)
            return sendMessage(`Uma Coquinha gelada saindo na hora!`);
        }
        else if(quantity == 2){    
            conta(6);   
            return sendMessage(`Uma Pepsi gelada saindo na hora!`);}
        else{
            return sendMessage(`Envie um numero válido`)
        }
    },

    async conta(telegramId: string, name: string, sendMessage: (text: string) => Promise<void>) {
        sendMessage(`Calculando.`)
        await delay(500)
        sendMessage(`Calculando..`)
        await delay(500)
        sendMessage(`Calculando...`)
        await delay(500)
        if(global.conta == 0){
            return sendMessage(`A conta está vazia!`)
        }
        return sendMessage(`O Total deu: ${conta(0)} Reais`);
    },
    async foto(telegramId: string, name: string, sendPhoto: (text: string) => Promise<void>, foto: string){
        await delay(500)
        return sendPhoto(`${{foto}}`);
    },
}

