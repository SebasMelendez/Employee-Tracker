const inquirer = require('inquirer');
const cTable = require('console.table');
const server = require('./server')
const selectionFwd = require('./utils/selectionFwd')
const {makeGet} = require('./utils/requestor')

function demo() {
    console.table([
        {
          name: 'foo',
          age: 10
        }, {
          name: 'bar',
          age: 20
        }
      ]);
}

const questions = [
  {
      type: "list",
      name: "selection",
      message: "What licence will you be using?",
      choices: ["View All Departments", "View All roles", "View All Employees", "Add Department", "Add a Role", "Add Employee", "Update an Employee"],
  }
];


async function init() {
  inquirer.prompt(questions)
  .then(responses => {
      const {selection} = responses
      let callObj = selectionFwd.decode(selection)
      if(callObj.method == 'get'){
        console.log(callObj)
        makeGet(callObj)
        
      }
      else{
        console.log("not Get")
      }
      init()
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

