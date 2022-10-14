var axios = require('axios');
var data = JSON.stringify({
    "collection": "drinks",
    "database": "drinksDB",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-vlqmq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'urI433bLh7lDNPb4z7JYibue7qZMqP99PTK2xCgDfsrJEXV06SlAdLz9yxCOV3k6',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });