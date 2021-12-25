// In dev

// const { checkClones, delClone } = require("../scaling")
// const scaling = require("../scaling")


// module.exports = async (client) => {
//     client.on('voiceStateUpdate', async (oldState, newState) => {
//         const { guild } = oldState
//         guildId = guild.id
//         if (oldState.channel == newState.channel) { return }
//         const channels = await scaling.checkClones({ guildId })
//         // console.log({channels})
//         // console.log(oldState.channel.id)

//         if (oldState.channel && channels.includes(oldState.channel.id) && oldState.channel.members.size == 0) {
//             cloneid = oldState.channel.id 
//             if(await scaling.checkLast({guildId,cloneid}))
//             {
//                 oldState.channel.delete()
//             }
            
//         }
//         if(newState.channel && channels.includes(newState.channel.id) && newState.channel.members.size == 1)
//         {
            
//             const clone =await newState.channel.clone()
//             oldCloneId = newState.channel.id
//             cloneid = clone.id
//             // console.log({clone})
//             scaling.addClone({guildId,oldCloneId,cloneid})
//         }
//     })
// }
