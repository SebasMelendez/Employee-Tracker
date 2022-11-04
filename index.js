const inquirer = require('inquirer');
const cTable = require('console.table');
const server = require('./server')
const selectionFwd = require('./utils/selectionFwd')
const {makeGet} = require('./utils/requestor')


const questions = [
  {
      type: "list",
      name: "selection",
      message: "What will you do today?",
      choices: ["View All Departments", "View All roles", "View All Employees", "Add Department", "Add a Role", "Add Employee", "Update an Employee"],
  }
];


function init() {
  console.clear()
  console.log(`
  ===========================================
                WELCOME TO CMS!!!
  ===========================================
  `)
  inquirer.prompt(questions)
  .then(responses => {
      const {selection} = responses
      let callObj = selectionFwd.decode(selection)
      if(callObj.method == 'get'){
        console.clear()
        makeGet(callObj)
      }
      else{
        console.log("not Get")
        console.log(callObj)
      }
  })

}

function serverCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      
      resolve(server());
    }, 1000);
  });
}

async function asyncStart() {
  console.log('Starting...');
  await serverCall();
  init()
}

asyncStart();

