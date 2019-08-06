import axios from 'axios';
import { fetchData, fetchSuccess, fetchError } from "./Action";

const actionCreator = url => dispatch => {
  return new Promise(() => {
    axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  });
};

export default actionCreator;
