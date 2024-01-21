# eCommerce Example 1b (Vue)

## Project setup
```
Install node.js
//Open command prompt
npm install -g @vue/cli
vue create YOUR_APP_NAME
cd YOUR_APP_NAME
npm run serve

//Open code editor
Install dependencies:
npm i cors dotenv stripe vue vue-router
npm i concurrently --save-dev

add .env file at root:
STRIPE_SECRET_KEY="YOUR_SECRET_KEY"

change package.json scripts
"scripts": {
    "build": "vue-cli-service build --dest build",
npm run build
create a folder structure app/views/
copy build folder components to app/views/

Run server: node index.js

view webpage @ http://localhost:8080

for localhost testing:
IndexView.vue: "https://cult-of-pizza-vue.onrender.com/checkout" --> "http://localhost:8080/checkout"
index.js: success_url: `https://cult-of-pizza-vue.onrender.com/success` --> "http://localhost:8080/success"

#Vue-Express on single port reference: https://www.bezkoder.com/serve-vue-app-express/
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
