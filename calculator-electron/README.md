# CalculatorElectron

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Electron

This is set up as an example Electron desktop version of the angular web app.

### Running

Start the angular build
>`ng build --prod --watch`

Then run the electron wrapper
>`npm run electron`

### Accessing the original Angular app for development

Electron doesn't support live reload, each time a change is made to the angular code, the electron app must be stopped and restarted :/

The original angular app can still be developed / debugged in the browser
>`ng serve`

Development work can be carried out in the browser with Angular, then regularly checked in Electron.

### Electron Devtools

The app can be run with devtools automatically opened in the window, simply uncomment the following line in main.js.
`// win.webContents.openDevTools();`

Otherwise devtools can be opened once the app is running from the `View` menu, `Toggle Developer Tools`.

Note the electron window is flagged as unresizeable, so the calculator view always fills the window, this will affect the devtools, comment this out in main.js ( `resizable: false,` ).  Ideally the app should resize to fill the window, and only a min width / height should be set.
