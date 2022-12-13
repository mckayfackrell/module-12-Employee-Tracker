const express = require('express');
//Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Welcome title in terminal window when starting database
const welcomeLogo = () => {
  console.log(chalk.green(figlet.textSync('\n欢迎 \nWelcome to \nEmployee Tracker', { font: 'standard', horizontalLayout: 'default', width: 80 })));
};
welcomeLogo();

// Force false so data doesn't get dropped on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});