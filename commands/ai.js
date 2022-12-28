require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_TOKEN,
});

module.exports = {
    name: 'ai',
    aliases: [],
    description: "Creates ai generated messages from user input.",
    cooldown: 1,
    execute(message, client, args, Discord){
        
      const openai = new OpenAIApi(configuration);
        let prompt = message.content.slice(3).trim();
        console.log(prompt);
       
        
        
        (async () => {
          const gptResponse = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: prompt,
              max_tokens: 4000,
              temperature: 0.3,
              top_p: 0.3,
              presence_penalty: 0,
              frequency_penalty: 0.5,
            });
          console.log(`${gptResponse.data.choices[0].text.substring(5)}`);
          let reply = "```" + gptResponse.data.choices[0].text + "\n```"
          //reply += ` ${gptresponse.data.choices[0].text}`
          console.log(reply)
          message.channel.send(reply);
        })();
  
}     
    }
