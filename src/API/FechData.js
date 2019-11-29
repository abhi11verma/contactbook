import * as URL from "../Common/apiDefaults";
const axios = require('axios').default;


const getData = () => {
    axios.get(URL.API_GETALL,{ crossdomain: true }).then(response =>{
        console.log(response.data)
        return response.data.records
    }).catch(error=>console.log(error))
        .finally(()=>console.log("Data Fetched"));
}

export default getData;
