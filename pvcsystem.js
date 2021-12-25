const pvcSchema = require('./schemas/pvcschema')
const { connBoilerPlate } = require('./utils/conn-util')

module.exports = {
    setup: connBoilerPlate(async ({ guildId,categId}) => {
      console.log('Running findOneAndUpdate()')
      await pvcSchema.findOneAndUpdate(
        { guildId, },
        { guildId, categId,chanId },
        { upsert: true, new: true, }
      )
    }),
    findCateg: connBoilerPlate(async ({ guildId}) => {
        // console.log(guildId)
        result = await pvcSchema.findOne(
          { guildId,}
        )
        // console.log({result})
        return(result)
      }),
    
  }