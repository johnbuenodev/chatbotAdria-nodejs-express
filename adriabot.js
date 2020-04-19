'use strict'

const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');

module.exports = function(){

const token = 'xxxxxxxxx'   


const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
  //vai reinviar a informação que vc digitou como resposta
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});

bot.on('message', async (msg) => {

  //comprimentos basicos
 
var oi = "oi";
if (msg.text.toString().toLowerCase().indexOf(oi) === 0) {
bot.sendMessage(msg.chat.id,"Oi " + msg.from.first_name + ", tudo bem com vc?");
} 
    
var tchau = "tchau";
if (msg.text.toString().toLowerCase().includes(tchau)) {
bot.sendMessage(msg.chat.id, "Gostei de conversar com você " + msg.from.first_name + " tchau :)");

}

var musica = "gosta de música?";
if (msg.text.toString().toLowerCase().includes(musica)) {
bot.sendMessage(msg.chat.id, "Sim gosto de música Classica! <3");

}

var livro = "você gosta de novela?";
if (msg.text.toString().toLowerCase().includes(livro)) {
bot.sendMessage(msg.chat.id, "Sim gosto das novelas mexicanas!");

}

var comprimento1 = "bom dia";
if (msg.text.toString().toLowerCase().indexOf(comprimento1) === 0) {
bot.sendMessage(msg.chat.id,"Obrigada! Bom dia  " + msg.from.first_name);
} 
    
var comprimento2 = "boa tarde";
if (msg.text.toString().toLowerCase().includes(comprimento2)) {
bot.sendMessage(msg.chat.id, "Obrigada! Boa tarde  " + msg.from.first_name);

}

var comprimento3 = "boa noite";
if (msg.text.toString().toLowerCase().includes(comprimento3)) {
bot.sendMessage(msg.chat.id, "Obrigada! Boa noite  " + msg.from.first_name);

}


/* data*/
var data = "data";
if (msg.text.toString().toLowerCase().includes(data)) {

var datamoment = moment().format('LLL');  // April 18, 2020 2:19 PM

bot.sendMessage(msg.chat.id, "Data Atual:  " + datamoment.toString());

}
/* dados user*/
var userdados = "userdados";
if (msg.text.toString().toLowerCase().includes(userdados)) {
    var idmessage = msg.message_id;
    var chat_id = msg.chat.id;
    var msgfromchat = msg.chat.first_name;
    var tipochat = msg.chat.type;
    var msgfromid = msg.from.id;
    var msgfromfirstname = msg.from.first_name;

    //console.log(msg);

    bot.sendMessage(msg.chat.id, 
                    "Id messagem: " + idmessage + "|" +  
                    "Id chat: " + chat_id + "|" 
                    + "Nome chat: " +  msgfromchat + "|" 
                    + "Tipo Chat: " +  tipochat + "|" 
                     + "Id user: " +  msgfromid + "|" 
                     + "Primeiro nome: " + msgfromfirstname);
                     
}



});

}