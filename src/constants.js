/**
 * Created by Tõnis Kasekamp on 06.05.2017.
 */

export const APIARY_ADDRESS = 'https://private-036b14-guiapi.apiary-mock.com';
const DEV_SERVER = 'http://localhost:8080';
const DEV_WEBSOCKET = {
    port: 8080,
    host: 'localhost'
};
const HEROKU_WEBSOCKET = {
    host: 'secure-falls-24516.herokuapp.com'
};
const HEROKU_SERVER = 'https://secure-falls-24516.herokuapp.com';
export let SERVER_URL = DEV_SERVER;
export let WEBSOCKET_URL = `ws://${DEV_WEBSOCKET.host}:${DEV_WEBSOCKET.port}/ws`;

export const chooseServer = () => {
    if (process.env.NODE_ENV === 'production') {
        SERVER_URL = HEROKU_SERVER;
        WEBSOCKET_URL = `wss://${HEROKU_WEBSOCKET.host}/ws`;
    }
};

export const prototypeIds = {
  ping: 0,
  pong: 1,
  ifimg: 16,
  setreel: 81,
  pos: 100
};
