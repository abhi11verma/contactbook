import * as URL from "../common/apiDefaults";
import getData from "./getData";

const axios = require('axios').default;


const postData = (data) => {
    console.log(data);
    return axios.post(URL.API_ADD, data,{crossdomain: true});
};

export default postData;
