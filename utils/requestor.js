const { response } = require("express");
const db = require("../db/connection");
const inputCheck = require("./inputCheck");
const cTable = require("console.table");

function makeGet(param, respond) {
  // console.log(param)
  const { fwdURL, method } = param;

  let checkArr = ["department", "role", "employee"];

  //check for departments
  for (let str of checkArr) {
    // console.log(str ,fwdURL)
    let tableChoice = fwdURL.includes(str);
    if (tableChoice) {
      const sql = `SELECT * FROM ${str}`;
      db.query(sql, (err, rows) => {
        if (err) {
          console.log(err);
        }
        console.log(`
        =================================
         Displaying all ${str} entries...
        =================================
        `)
        console.table(rows);
      });
    }
  }
}

module.exports = {
  makeGet,
};
