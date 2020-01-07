'use strict';
const AWS = require("aws-sdk")
const DDB = new AWS.DynamoDB.DocumentClient()
const TableName = process.env.DYNAMODB_TABLE_DATE

// module.exports.constantArray = async (event,context,callback) => {
//   let tbody = JSON.parse(event.body)
//   console.log(tbody)
// return  {
//   statusCode:200,
//   body:JSON.stringify(tbody),
//   headers: {
//     "Access-Control-Allow-Origin":"*"
//   }
// }
// };

module.exports.verifyDateRoom = (event,context,callback) => {
  let body = JSON.parse(event.body)

  let params = {
    TableName,
    Key: {
      date : body.date,
      user: "cortizp"
    }
  };
  
  DDB.get(params, (err, data) => {
    if (err) {
      callback({
        statusCode: 400,
        body: JSON.stringify(err),
        headers: {
          "Access-Control-Allow-Origin":"*"
        } })
    } else {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
          "Access-Control-Allow-Origin":"*"
        } }) } })
}

module.exports.createDateRoom = (event,context,callback) => {
  let body = JSON.parse(event.body)
  
  let params = {
    TableName,
    Key: {
      date : body.date,
      user: "cortiz"
    },
    ExpressionAttributeNames: {
      "#R" : Object.keys(body)[1],
      "#H" : Object.values(body)[1]
    },
    ExpressionAttributeValues: { ":b" : true },
    UpdateExpression: `SET #R.#H = :b`  
  };
  
  DDB.update(params, (err, data) => {
    if (err) {
      callback({
        statusCode: 400,
        body: JSON.stringify(err),
        headers: {
          "Access-Control-Allow-Origin":"*"
        } })
    } else {
      callback(null,{
        statusCode: 200,
        body: JSON.stringify("It's good"),
        headers: {
          "Access-Control-Allow-Origin":"*"
        } }) } })
}

module.exports.cancelDateRoom = (event,context,callback) => {
  let body = JSON.parse(event.body)
  console.log(body)

  var params = {
    TableName,
    ExpressionAttributeNames: {
      "#U" : "user",
     }, 
     ExpressionAttributeValues: {
      ":u" : body.numEmployee
     }, 
    FilterExpression: `#U = :u`
  };

  console.log(params)
  
  DDB.scan(params, (err, data) => {
     if (err) {
      callback({
        statusCode: 400,
        body: JSON.stringify(err),
        headers: {
          "Access-Control-Allow-Origin":"*"
        } })
     }
     else { callback(null,{
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin":"*"
      } }) } })
}