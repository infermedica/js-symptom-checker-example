# Starting guide: building a symptom checking application with JavaScript ES6

Are you looking for a base solution to set up your symptom checking application with JavaScript? See how you can do it with Infermedica API.

In this example, we present a web-based symptom checker written in pure JavaScript ES6 (without using any frameworks) and all essential information that you might need while working with Infermedica API and JavaScript ES6. We hope that the presented example will be a good starting point and inspiration for the further development of your application.

The example presented in this project is merely a tutorial. It's not intended to be a production-ready solution.

For more inspiration, best practices, and examples, please go to [Infermedica API documentation](https://developer.infermedica.com/docs/introduction).

## Applications based on Infermedica API

Infermedica API enables you to develop a prediagnosis application that resembles a basic interview with a doctor and provides you with information about the most probable symptoms and conditions.

It uses Artificial Intelligence API provided by [Infermedica](https://infermedica.com) as an engine for symptom analysis.

The most recent Infermedica API documentation is always available on our [Developer Portal](https://developer.infermedica.com/).

Do not hesitate to [contact us](support@infermedica.com) if you need any further help.

> Are you interested in this solution but lacking the developers' team who could ensure the highest quality of implementation process? Check out [Symptom Checker](https://infermedica.com/product/symptom-checker) developed by Infermedica and see how we can support you in its implementation. [Contact us](https://infermedica.com/contact) ➡️

## Getting started

### Providing API credentials

First of all, you have to obtain your app-id and app-key to use API. To do so, please register at [infermedica's developer portal](https://developer.infermedica.com) to get the necessary credentials, then edit the file `src/settings.js`.
```javascript
const settings = {
  'app-id': 'your-id-here',
  'app-key': 'your-key-here'
};

export default settings;
```

⚠️  Please do not present API credentials in public places.

### Dependencies

Before you start working with Infermedica API and JS ES6, please make sure that you have `node` installed in your system.
Please refer to the docs to find out the most suitable way depending on your OS.

This project uses `yarn` as a dependency manager. Please make sure that you have `yarn` installed before going to the next step.

`# npm install -g yarn`

### Installing further dependencies with yarn

After making sure that you have `yarn`, please go to the root directory and type:

`yarn install`

This command will install all dependencies necessary to run this project.

### Running the app in development mode

To run our app on your computer, please type:

`yarn dev`

This command will run the server locally on your computer in development mode.
You will be able to use our API with this app.

## Future improvements

Do you have any ideas on how we can make this exemplary symptom checker better? Create [an issue](https://github.com/infermedica/js-symptom-checker-example/issues/new) and let us know!

## Disclaimer

The solution presented above is just an example of working with Infermedica API and JavaScript ES6, and should not be treated as a production-ready solution. If you are looking for a white-labeled solution for symptom checking, please check out [Symptom Checker](https://infermedica.com/product/symptom-checker) developed by Infermedica.

 ## License

Presented symptom checking application is available on [MIT license](./LICENSE).
