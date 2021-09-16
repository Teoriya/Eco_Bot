const scalable = require('../../scaling')

module.exports = {
    aliases: ['t'],
    category: 'Economy',
    description: 'Checks balance',
    slash: false,
    expectedArgs: '[@mention]',
    minArgs: 0,
    maxArgs: -1,
    syntaxError: 'Oops syntax error. Use `{PREFIX}`balance {ARGUMENTS}',
    cooldown: '5s',
    guildOnly: true,
    slash: false,
    callback: async ({ message,args }) => {
        guildId = message.guild.id
        // console.log(args);
        scalable.add({guildId,args});
    }
}