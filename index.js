require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const messageCheck = ""
var response
async function sendMessage(message){
    const { Configuration, OpenAIApi } = require("openai");
  
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: message}],
    } );
    responce = completion.data.choices[0].message.content
    return responce;}
/* the bot */
client.on('ready', () => {
    console.log('bot is ready');
})

client.on('messageCreate', async (message) => {
    console.log(message.content.toString().substring(0,1))
   if ( message.content.toString().substring(0,1) === '-') {
        let response = await sendMessage(message.content.toString());
        message.reply({
            content: response.toString(),
        })
    }
    else  if (message.content.toString() === 'quote') {
        let resp = sendMessage("Give me a random quote")
        const quote = resp.data.content;

        message.reply({
            content: quote,
        })
    } 
})

client.login(process.env.DISCORD_BOT_ID);
