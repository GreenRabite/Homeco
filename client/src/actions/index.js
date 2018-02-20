import axios form 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  return function(dispatch) {
    async const res = axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res});
  }

};
