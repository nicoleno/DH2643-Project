# DH2643-Project

Setup
1. Clone repo
2. Download Expo Go App on mobile device
3. Run ```npm install expo-cli``` and ```npx expo install expo-image-picker``` in terminal
4. In the `fetch.js` file, change your IP-adress to one that your computer and mobile device is currently on:
    ```Javascript
    export const getDrinks = async () => {
    fetch("http://<IP_ADDRESS>:3000/drinks", {
        method: "get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then((res) => res.json())
        .then((data) => setData(data.drinks))
        .then(() => setLoading(false))
        .catch((err) => err);
        }
    ```
5. Run ```node ./db/server.js``` to start the server
6. Run ```npm start```
7. Scan QR code in terminal with camera on mobile device

