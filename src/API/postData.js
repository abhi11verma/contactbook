import * as URL from "../common/apiDefaults";
import getData from "./getData";

const axios = require('axios').default;


const postData = (data) => {
    console.log(data);
    return (dispatch) => {
        axios.post(URL.API_ADD, data,{crossdomain: true}).then(response => {
            console.log(response)
            dispatch({
                type: 'DATA_POSTED',
                payload: response.data.records
            })
        }).then(dispatch(getData))
            .catch(error => console.log(error))
            .finally(() => console.log("Data Fetched"));
    }
};

export default postData;
