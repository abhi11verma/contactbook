import * as URL from "../common/apiDefaults";
import * as constants from '../actions/actionCreator';

const axios = require('axios').default;


const getData = () => {
    return axios.get(URL.API_GETALL, {crossdomain: true});
};

export default getData;
