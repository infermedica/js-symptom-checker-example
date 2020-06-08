# Symptom Checker Example

This is an example of a web-based symptom checker written in pure ES6 (without using any frameworks). It uses Artificial Intelligence API provided by Infermedica as an engine for symptom analysis.

We created it to help you work with the Infermedica API, and show you how to implement such applications on your own.
This application resembles a basic interview with a doctor and provides you with information about most likely conditions.

The most recent Infermedica API documentation is always available on our [developer portal](https://developer.infermedica.com/).

Do not hesitate to contact us if you need any further help.

## Getting started

### Obtain your own credentials

First of all you have to obtain your own app-id and app-key in order to use API. To do so, please register at [infermedica's developer portal](https://developer.infermedica.com) to get necessary credentials, then edit file `src/settings.js`.
```javascript
const settings = {
  'app-id': 'your-id-here',
  'app-key': 'your-key-here'
};

export default settings;
```

⚠️ Please keep your credentials in a safe place. ⚠️

### Dependencies

Before going to the next step, please make sure that you have `node` installed in your system.
Please refer to the docs to find out the most suitable way depending on your OS.

This project uses `yarn` as dependency manager. Please make sure that you have `yarn` installed before going to the next step.

`# npm install -g yarn`

#### Installing further dependencies with yarn

After making sure that you have `yarn`, please go to the root directory and type:

`yarn install`

This command will install all dependencies necessary to run this project.

### Running the app in development mode

In order to run our app on your computer please type:

`yarn dev`

This method will run server locally on your computer in the development mode.
You will be able to use our API with this app.

### Preparing a production-ready build

`yarn build`

## Going live?

Feel free to contact us, so we can make Symptom Checker specially for your organization. 

We do not recommend using this project 'as is' in production. There are some steps you need to go through before.

TODO
 
## License

This application is [MIT licensed](./LICENSE).
