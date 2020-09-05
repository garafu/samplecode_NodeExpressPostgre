var path = require("path");
var config = require("../config.json").db;
var SQL = require("@garafu/mysql-fileloader").loadSync(path.join(__dirname, "./sql"));
var { Client } = require("pg");

var createClientInstance = function () {
  return new Client({
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
  });
};

var executeQuery = async function (query, values) {
  try {
    var client = createClientInstance();
    await client.connect();
    var res = await client.query(SQL[query], values);
    client.end();
    return res;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  executeQuery
}