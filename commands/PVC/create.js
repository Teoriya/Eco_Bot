const pvcsys = require('../../pvcsystem')
const economy = require('../../economy')

module.exports = {
    aliases: ['br'],
    category: 'PVC',
    description: 'Creates PVC',
    slash: false,
    expectedArgs: '',
    minArgs: 0,
    maxArgs: 2,
    syntaxError: 'Oops syntax error. Use `{PREFIX}`balance {ARGUMENTS}',
    cooldown: '60s',
    guildOnly: true,
    slash: false,
    callback: async ({ message, text }) => {//inprogress
        // guildId = message.guild.id
        // x = await pvcsys.findCateg({guildId})
        // // console.log({x})
        // chanId = x.chanId
        // if(message.channel.id == chanId)
        // {
        //     console.log(text)
        // }
        // // console.log(message.channel.name)
    }
    
}