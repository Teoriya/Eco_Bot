const economy = require('../../economy')

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
    callback: async ({ args,text }) => {
        console.log(args)
        desiredArgs = text.split(/[ ]+/)
        undesiredArgs = text.split(/ /g)
        console.log("chahiye",desiredArgs)
        console.log("nahi chahiye",undesiredArgs)
    }

}