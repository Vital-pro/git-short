// todo Start project at steps
//* npm init --y
//* npx create-gitignore node
//* npx eslint --init         add settings

// todo Express, Nodemon, Morgan
//* npm i express morgan
//* npm i -D nodemon

//? in the package.json add scripts:
/* 
"scripts": {
  "start": "node src/app.js",                  // npm start    - так запускаем
  "dev": "nodemon src/app.js --ext .js,.jsx"   // npm run dev  - так запускаем, если есть React (отслеживает расширения .js,.jsx)
},
*/

// ? Запуск/остановка сервера:
/*
- npm start - запустить сервер
- npm run dev - запустить сервер в режиме разработчика "без перезагрузки"
- ctrl+c - остановить сервер
*/

// todo Create new file -> app.js в корне - это и есть наше приложение
const express = require('express'); // imports express

const app = express(); //  server instance

const PORT = 3000; //PORT or process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hello, world</h1>');
});

app.listen(PORT, () => {
  console.log('server is up..., started on port:', PORT);
});

/* go to the browser, enter in the line URI Localhost:port (Localhost:3000 in the case)
*/
