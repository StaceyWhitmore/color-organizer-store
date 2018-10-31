A list of intalls run:
=====================
npm init -y

npm install webpack webpack-cli --save-dev

to prevent accidental publishing add
```"private": true,
```
to package.json below "description"

and remove
```
"main": "index.js",
```

run
```
npm install --save lodash
```
if needed.

last run the build
```
npx webpack
```
run the build again but instead using a new configuration file: (you can pass a config of any name)
```
npx webpack --config webpack.config.js
```

adding "build": "webpack" to webpack.congig.js allows to run
```
npm run build
```

from the command line instead of
```
npx webpack --config webpack.config.js
```
