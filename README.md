# MCS GUI with React
This is an experimental GUI built with React for the ESTCube-2 Mission Control System. The backend server is [mcs-go](https://github.com/TKasekamp/mcs-go) and is deployed to Heroku somewhere.

[Demo](https://tkasekamp.github.io/mcs-gui-react)
## Features
The terminal uses a websocket connection. Write something in the input and it's POSTed to the server. The server then "processes" the request and the result is sent via websocket a few seconds later. It currently works like a chat client as commands sent from multiple windows are shown on the screen.

Also:
* Passes table populated with JSON from Apiary. To be changed.
* COM charts with react-timeseries-charts

## Installation
This is a standard npm project. For local development, the companion server [mcs-go](https://github.com/TKasekamp/mcs-go) should be used. If GO is too scary, change some conf to use the Heroku server in `constants.js`.
## Thanks to
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

UI style provided by [CoreUI](http://coreui.io) React Starter project.
