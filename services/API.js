let apiBaseUrl = 'https://fakestoreapi.com/';

const getProductsFromApi = () =>
  new Promise((resolve, reject) => {
    const productsEndpoint = apiBaseUrl + 'products';
    console.log('API URL ' + productsEndpoint);
    fetch(productsEndpoint)
      .then(res => res.json())
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });

const apiData = {
  getProductsFromApi,
};

export default apiData;
