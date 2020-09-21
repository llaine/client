# @llaine/client


![The App](assets/app.png 'The App')

## Get started

### Requirements

[Expo-cli](https://docs.expo.io/get-started/installation/)


### Installation

#### Locally

```bash
$ yarn install
$ export start -c 
```

This command will start the expo debugger and ask you to choose either to
start the app in IOS (i) or Android (a).


#### On your Phone

To play around with the app, visit the [expo link](https://exp.host/@llaine7/client), flash the QR code and use it on your expo app.

## The App

### Architecture

The app is a classic expo app using, Typescript and Redux.
Every files are in the `src` folder.

N.B: The app doesn't embed any navigation, everything happen on the main screen. 

- `actions`, where every redux actions are
- `components`, where all the react components are
- `reducers`, where every state of the app are.
-  `screens`, where every screens (as components that would be connected to a navigator) are. 
There's a separation in the screens between screens themselves and screens called "router", the latter are components that connect
with redux allowing the screen to be more easily testable. 
- `services`, where all the services are (API, etc).

## Testing

```
$ yarn test
```

### Coverage

```
$ yarn test --coverage
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   94.87 |      100 |   94.12 |   97.37 |
 actions                   |   83.33 |      100 |     100 |   83.33 |
  facesActions.ts          |   83.33 |      100 |     100 |   83.33 | 19
 components                |     100 |      100 |     100 |     100 |
  FaceItem.tsx             |     100 |      100 |     100 |     100 |
  FaceList.tsx             |     100 |      100 |     100 |     100 |
  FaceListHeader.tsx       |     100 |      100 |     100 |     100 |
  StatusViewController.tsx |     100 |      100 |     100 |     100 |
 reducers                  |     100 |      100 |     100 |     100 |
  facesState.ts            |     100 |      100 |     100 |     100 |
 screens                   |     100 |      100 |     100 |     100 |
  rootScreen.tsx           |     100 |      100 |     100 |     100 |
 services                  |      75 |      100 |      50 |     100 |
  facesApi.ts              |      75 |      100 |      50 |     100 |
---------------------------|---------|----------|---------|---------|-------------------

```

To see in the browser, open locally the `./coverage/lcov-report/index.html` file.


### Backend

At the moment, this client is pointing towards the server hosted on an heroku app.
In order to change that, modify the file in `src/services/facesApi` to point towards your localhost:8080 for example.
