import { Accelerometer } from 'expo-sensors';
//shake bibliotek:
//npm install expo-sensors
//lowering sens will give high sensitivity and increasing this will give lower sensitivity
const THRESHOLD = 400;

export default class ShakeEventExpo {
    static addListener(handler:any) {
    let last_x:any, last_y:any, last_z:any;
    let lastUpdate = 0;

    Accelerometer.addListener(accelerometerData => {
        let { x, y, z } = accelerometerData;
        let currTime = Date.now();
        if ((currTime - lastUpdate) > 100) {
        let diffTime = (currTime - lastUpdate);
        lastUpdate = currTime;
        let speed = Math.abs(x + y  - last_x - last_y ) / diffTime * 10000;
        if (speed > THRESHOLD) {
        handler();
        }
        last_x = x;
        last_y = y;
        last_z = z;
        }
    });
    }
    static removeListener() {
    Accelerometer.removeAllListeners()
    }
    };