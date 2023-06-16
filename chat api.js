const { Configuration, OpenAIApi } = require("openai");
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
  console.log(responce)
  return responce;}


