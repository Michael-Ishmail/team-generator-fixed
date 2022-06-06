const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const generateTeam = require('./template')
const directory = path.resolve(__dirname, "gen");
const directoryHtml = path.join(directory, "output.html");


teamArray = [];



function generate () {

  function teamGen () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "I am done adding team members."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          append();
      }
    })
  }
  
function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    teamGen();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      teamGen();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      teamGen();
    });

  }

function append () {
    fs.writeFileSync(directoryHtml, generateTeam(teamArray), "UTF-8")

}

teamGen();

}

generate();