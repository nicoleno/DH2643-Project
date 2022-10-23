import { FETCH_DRINKS } from '../store/actions';

const { useDispatch } = require('react-redux');

export const getDrinks = () => {
    fetch("http://192.168.0.37:3000/drinks", {
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

// var axios = require('axios');

// var data = JSON.stringify({
//     "collection": "drinks",
//     "database": "drinksDB",
//     "dataSource": "Cluster0",
//     "projection": {
//         "_id": 1
//     }
// });
            
// var config = {
//     method: 'post',
//     url: 'https://data.mongodb-api.com/app/data-vlqmq/endpoint/data/v1/action/findOne',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': 'urI433bLh7lDNPb4z7JYibue7qZMqP99PTK2xCgDfsrJEXV06SlAdLz9yxCOV3k6',
//     },
//     data: data
// };
            
// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// const [drinks, setDrinks] = React.useState([]);


// const fetchDrinkList = () => {

//     const dispatch = useDispatch();

//     fetch("http://192.168.1.69:3000/drinks", {
//         method: "get",
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//     }).then((res) => res.json()).then((data) => dispatch({ type: 'FETCH_DRINKS', list: data }).catch((err) => err);
// }

// export default fetchDrinkList;