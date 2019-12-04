import * as URL from "../common/apiDefaults";
import getData from "./getData";

const axios = require('axios').default;


const deleteData = (data) => {
   return axios.delete(URL.API_DELETE+data,{crossdomain: true})

};

export default deleteData;
