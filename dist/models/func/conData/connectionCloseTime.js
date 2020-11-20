"use strict";
// import client from '../../database'
// import { CON_LOG_DB, CON_SESSION_COL } from './collection'
// import { ObjectID } from 'mongodb'
// 
// // get collection for use as constant in this file.
// 
// const conCol = client.db(CON_LOG_DB).collection(CON_SESSION_COL)
// 
// type conCloseTimeType = {
//   connection_id: ObjectID | string
//   close_time?: Date
// }
// // get connection info by id and update it whit close time.
// export default async function connectionCloseTime ({connection_id, close_time=new Date()}: conCloseTimeType) {
//   if (!client.isConnected) {
//     const error = new Error('database client is not connected')
//     error.name = 'clientNotConnected'
//     throw error
//   }
//   try {
// 
//     const result = await conCol.findOneAndUpdate({
//       _id: connection_id
//     },
//     // update operation
//     {
//       // set new field name close time.
//       $set: {close_time: close_time}
//     })
//     
//     return await getServerRunDuration(result.value._id)
// 
//   } catch (error) {
//     throw error
//   }
// 
// }
// 
// // use after close time to get run time deration.
// async function getServerRunDuration (connectionId: ObjectID | string): Promise<number> {
//   try {
//     const result = await conCol.findOne({ _id: connectionId }, { projection: { time:1, close_time:1 } })
//     return result.time.getTime() - result.close_time.getTime()
//   } catch (error) {
//     throw error
//   }
// }
