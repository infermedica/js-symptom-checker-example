# Symptom Checker Example

This is an example of a web-based symptom checker written in pure ES6 (without using any frameworks). It uses Artificial Intelligence API provided by Infermedica as an engine for symptom analysis.

We created it to help you work with the Infermedica API, and show you how to implement such applications on your own.
This application resembles a basic interview with a doctor and provides you with information about most likely conditions.

The most recent Infermedica API documentation is always available on our [developer portal](https://developer.infermedica.com/).

Do not hesitate to contact us if you need any further help.

## Dependencies

Before going to the next step, please make sure that you have `node` installed in your system.
Please refer to the docs to find out the most suitable way depending on your OS.

This project uses `yarn` as dependency manager. Please make sure that you have `yarn` installed before going to the next step.

`# npm install -g yarn`

Next steps assume that you have installed all dependencies. 

## Getting started

First of all you have to obtain your own app-id and app-key from [developer portal.](https://developer.infermedica.com/)
You will need to paste these into right fields inside the application.

### Installing further dependencies with yarn

Please go to the root directory and type
`yarn install`.

### Providing api credentials

You have to provide your own credentials in order to use API. To do so, 
please register at [infermedica's developer portal](https://developer.infermedica.com) to get keys, then edit file `src/settings.js`.
```javascript
const settings = {
  'app-id': 'your-id-here',
  'app-key': 'your-key-here'
};

export default settings;
```


### Running the app in development mode

`yarn dev`

### Preparing a production-ready build

`yarn build`

## Plans for the future

* we plan to extract `infermedica-api.js` from this example and release it as standalone ES6 module

Do you have any ideas? Create [an issue](https://github.com/infermedica/js-symptom-checker-example/issues/new) and let us know!
 
## License

This application is [MIT licensed](./LICENSE).
