import axios from 'axios';

//set your api endpoint below
const api = "xyz.apiEndpoint.com";

export const fetchToken = () => JSON.parse(localStorage.getItem('idToken'));

//Use below function to make HTTP API calls
export default (url, data, type, noHeaders, params) => new Promise((resolve, reject) => {
  let token = '';
  let apiUrl = api;
  const requestObj = {
    method: type,
    url: apiUrl + url,
  };
  noHeaders || (token = fetchToken());
  type !== 'get' && (requestObj.data = data);
  noHeaders || (requestObj.headers = { Authorization: token });
  params && (requestObj.params = params);
  axios(requestObj).then(resolve, reject);
});
