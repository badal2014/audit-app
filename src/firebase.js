import axios from 'axios';
import _ from 'lodash';

export default function fireAjax(method, URL, data, api) {
  console.log("In Function");
  

    if (method === 'POST') {
      console.log("in IF part");

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token')
        }
      }
      return axios.post(encodeURI(URL), data, config);
    } else if(method === 'GET') {
      console.log("in else part");
      
      let config = {
        headers: {
          "Content-Type": "application/json",
          'x-auth-token': `${sessionStorage.getItem('token')}`
        }
      }
      
      return axios.get(encodeURI(URL), config);
    }
 }