import * as URL from "../common/apiDefaults";
import getData from "./getData";

const axios = require('axios').default;


const deleteData = (data) => {
    return (dispatch) => {
        axios.delete(URL.API_DELETE+data,{crossdomain: true}).then(response => {
            console.log("Response",response)
            dispatch({
                type: 'DATA_DELETED',
                payload: response.data
            })
        }).then(dispatch(getData()))
            .catch(error => console.log(error))
            .finally(() => console.log("Data Deleted"));
    }
};

export default deleteData;
