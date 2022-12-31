# module-12-Employee-Tracker
## Description

An application called Employee Tracker which allows for a user to manage departments, roles, and employees in a company. 

## Video Walkthrough
URL

## Installation 
The user should clone the repository from GitHub. This application requires Node.js, Inquirer, console.table and mysql2. To start application run `npm start`. To view database from MySQL `run mysql -u root -p`. 

## Usage

When the user starts the application in the command line they are presented with the option to view all departments.

Once a department is chosen the user can then see a formatted table showing department names and ids. 

Information such as job title, role id, employees, role, salary, etc. are all editable through the application. 

## Authors and acknowledgment

I, McKay Fackrell am the original creator of the code.

## License

Please refer to the LICENSE in the repo.

## Project status

A week long course that should be submitted on December 8, 2022. Once submitted changes will most likely cease as new repositories going over new coding features will be added and more focus will be dedicated to them.

## Homework Acceptance Criteria

GIVEN a command-line application that accepts user input

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department

THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role

THEN I am prompted to select an employee to update and their new role and this information is updated in the database
