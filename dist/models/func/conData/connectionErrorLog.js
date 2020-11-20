"use strict";
// import client from '../../database'
// import { CON_ERR_LOG_COL, CON_LOG_DB } from './collection'
// import { ObjectID } from 'mongodb'
// 
// const errCol = client.db(CON_LOG_DB).collection(CON_ERR_LOG_COL)
// 
// type errorLog = {
//   error: Error
//   connectionId: ObjectID
// }
// 
// export default async function ConnecrtionErrorLog (log: errorLog) {
//   await errCol.insertOne({
//     error: log.error.name,
//     message: log.error.message,
//     connection_session: log.connectionId
//   })
//   return;
// }
