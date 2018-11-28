# reactapp
---

## Prerequisites
1. Make sure Node.js is installed - `https://nodejs.org/en/`
2. Check the version of npm - `npm -v`
3. Install create-react-app - `npm install -g create-react-app`

## Steps (create a new project, and run it)
1. Make a folder structure - `C:\ws_rak\react`
2. Go to folder - `cd C:\ws_rak\react`
3. Create a React project 'reactapp' under above folder - `create-react-app reactapp`
4. Go to newly created project - `C:\ws_rak\react\reactapp`
5. Start the application - `npm start`
6. Test application - `http://localhost:3000` 

```
C:\ws_rak\react\reactapp\
	- package-lock.json
	- package.json
	- README.md
	- .gitignore
	+ node_modules
	+ public
		- index.html
		- manifest.json
		- favicon.ico	
	+ src
		- App.css
		- App.js
		- App.test.js
		- index.css
		- index.js
		- logo.svg	
		- servicWorker.js
```

```
http://localhost:3000 (displays following data)
Id: 1 | Name: Leanne Graham | Username: Bret | Email: Sincere@april.biz | Phone: 1-770-736-8031 x56442| Address: Kulas Light, Apt. 556, Gwenborough, 92998-3874
Id: 2 | Name: Ervin Howell | Username: Antonette | Email: Shanna@melissa.tv | Phone: 010-692-6593 x09125| Address: Victor Plains, Suite 879, Wisokyburgh, 90566-7771
Id: 3 | Name: Clementine Bauch | Username: Samantha | Email: Nathan@yesenia.net | Phone: 1-463-123-4447| Address: Douglas Extension, Suite 847, McKenziehaven, 59590-4157
Id: 4 | Name: Patricia Lebsack | Username: Karianne | Email: Julianne.OConner@kory.org | Phone: 493-170-9623 x156| Address: Hoeger Mall, Apt. 692, South Elvis, 53919-4257
Id: 5 | Name: Chelsey Dietrich | Username: Kamren | Email: Lucio_Hettinger@annie.ca | Phone: (254)954-1289| Address: Skiles Walks, Suite 351, Roscoeview, 33263
Id: 6 | Name: Mrs. Dennis Schulist | Username: Leopoldo_Corkery | Email: Karley_Dach@jasper.info | Phone: 1-477-935-8478 x6430| Address: Norberto Crossing, Apt. 950, South Christy, 23505-1337
Id: 7 | Name: Kurtis Weissnat | Username: Elwyn.Skiles | Email: Telly.Hoeger@billy.biz | Phone: 210.067.6132| Address: Rex Trail, Suite 280, Howemouth, 58804-1099
Id: 8 | Name: Nicholas Runolfsdottir V | Username: Maxime_Nienow | Email: Sherwood@rosamond.me | Phone: 586.493.6943 x140| Address: Ellsworth Summit, Suite 729, Aliyaview, 45169
Id: 9 | Name: Glenna Reichert | Username: Delphine | Email: Chaim_McDermott@dana.io | Phone: (775)976-6794 x41206| Address: Dayna Park, Suite 449, Bartholomebury, 76495-3109
Id: 10 | Name: Clementina DuBuque | Username: Moriah.Stanton | Email: Rey.Padberg@karina.biz | Phone: 024-648-3804| Address: Kattie Turnpike, Suite 198, Lebsackbury, 31428-2261
```

## Reference Materials (and other useful links)
1. https://reactjs.org/
2. https://jsonplaceholder.typicode.com/users (sample JSON)
3. https://code.visualstudio.com/ (IDE - Visual Studio Code)
4. https://www.youtube.com/watch?v=hzLDsxPGctY&feature=youtu.be (React js Tutorial - How To Get Data From An API With React)

## Defintions
1. React: Its a JavaScript library for building user interfaces. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
2. Node.js: Its an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
3. npm: Its a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
4. Babel: Its a JavaScript compiler that includes the ability to compile JSX into regular JavaScript.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
