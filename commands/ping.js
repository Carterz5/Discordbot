module.exports = {
    name: 'ping',
    aliases: ['poing', 'dong'],
    description: "this is a ping command!",
    cooldown: 1,
    execute(message, client, args, Discord){
        message.channel.send('pong!');
    }
}