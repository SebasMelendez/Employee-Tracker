const inquirer = require('inquirer');
const cTable = require('console.table');
const server = require('./server')

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
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All roles", "Add Roles","View All Departments", "Add Department"],
  }
];


async function init() {
  inquirer.prompt(questions)
  .then(responses => {
      const {selection} = responses
      
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

