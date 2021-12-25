// In Desv

// const { reset } = require('nodemon')
// const scaleSchema = require('./schemas/scalingschema')
// const { connBoilerPlate } = require('./utils/conn-util')
// //CACAHING TO BE IMPLEMENTED


// module.exports = {
//     add: connBoilerPlate(async ({ guildId, args }) => {
//         // console.log(args)

//         await Promise.all(args.map(async (chan) => {//maps ke baare me padhle dalle uwu...krlio ... google ;-)
//             if (chan.length == 18) {
//                 cloneid=chan
//                 const result = await scaleSchema.findOneAndUpdate(
//                     { guildId,chan },
//                     { guildId, chan ,cloneid},
//                     { upsert: true, new: true, }
//                 )
//                 // console.log({ result })
//             }
//             else {
//                 return false
//             }
//             return true
//         }
//         ))
//     }),

//     checkClones: connBoilerPlate(async ({ guildId, }) => {//NON TESTED
//         // console.log('Running findOne()')
//         const result = await scaleSchema.find({
//             guildId,
//         })
//         if (!result) { return []}
//         // console.log(result)
//         output=[]
//         result.forEach((element) => {
//            output.push(element.cloneid)
//         })
//     return output
//     }
//     ),

//     addClone: connBoilerPlate(async ({ guildId, oldCloneId,cloneid }) => {
    
//         const result = await scaleSchema.findOne(
//             { guildId, cloneid:oldCloneId}
//         )
//         let chan = result.chan
//         // console.log("hellolaksjfdlkasdjflk")
//         await new scaleSchema({
//             guildId,
//             chan,
//             cloneid,
//           }).save()
        
    
// }),

// checkLast: connBoilerPlate(async ({ guildId, cloneid }) => {
//     const result = await scaleSchema.findOne(
//         { guildId, cloneid}
//     )
//     let chan = result.chan
//     const result2 = await scaleSchema.find(
//         { guildId, chan}
//     )
//     if (result2.length>1){await scaleSchema.findOneAndDelete(
//         { guildId, cloneid }
//     )
// return true;}
//     else{return false}
// }),
// }