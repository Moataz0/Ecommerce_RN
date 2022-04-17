export const API_BASE_URL = 'https://bugshannperfumes.glaztor.com/api/api';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

// End Points
export const SIGNIN = getApiUrl('/Account/Login');
export const SIGNUP = getApiUrl('/Account/Register');
export const RESET_PASSWORD = getApiUrl('/Account/ResetPassword');

let apiBaseUrl = 'https://fakestoreapi.com/';
const getProductsFromApi = () =>
  new Promise((resolve, reject) => {
    const productsEndpoint = apiBaseUrl + 'products';
    fetch(productsEndpoint)
      .then(res => res.json())
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        console.log('error');
      });
  });

export const apiData = {
  getProductsFromApi,
};
