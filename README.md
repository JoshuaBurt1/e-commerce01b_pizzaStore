# eCommerce Example 1b (Vue)

## Project setup
```
Install node.js
Open command prompt
npm install -g @vue/cli
vue create YOUR_APP_NAME
cd YOUR_APP_NAME
npm run serve

view webpage @ http://localhost:8080/

npm i cors dotenv stripe vue vue-router
npm i concurrently --save-dev
```

### Compiles and hot-reloads for development
```
* vue only start: npm run serve

* to run concurrently server and vue files on different ports at same time
* add this to package.json "scripts": "start": "concurrently \"npm run serve\" \"node index.js\""
* run in terminal via: npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint    
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Capabilities 
```
~Stripe Payments 
```
