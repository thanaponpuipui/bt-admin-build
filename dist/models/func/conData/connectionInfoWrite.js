"use strict";
// import client from '../../database'
// import { CON_LOG_DB, CON_SESSION_COL } from './collection'
// import { ObjectID } from 'mongodb'
// 
// const conCol = client.db(CON_LOG_DB).collection(CON_SESSION_COL)
// 
// type conInfoType = {
//   time: Date
//   os_platform: string
//   arch: string
//   version: string
// }
// 
// // write an connection meta data for connection session record.
// async function connectionInfoWrite (data: conInfoType): Promise<ObjectID> {
//   try {
//     const result = await conCol.insertOne(data)
//     return <ObjectID> result.insertedId
//   } catch (error) {
//     let conInfoErr = new Error(error.message)
//     conInfoErr = Object.assign(conInfoErr, {note:'error occur when wrote a connection info.'})
//     throw conInfoErr
//   }
// }
// 
// export default connectionInfoWrite
