const pvcSys = require("../pvcsystem")

module.exports = {
  name: "test",
  aliases: [''],
  category: 'Configuration',
  description: 'Checks ping',
  expectedArgs: ' ',
  minArgs: 0,
  maxArgs: 0,
  guildOnly: true,
  slash: "both",

  callback: async({message, client}) => {
      console.log("test")
      console.log(await pvcSys.pvcGetData({}))
  },
}