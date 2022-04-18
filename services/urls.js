export const API_BASE_URL = 'https://bugshannperfumes.glaztor.com/api/api';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

// End Points
export const SIGNIN = getApiUrl('/Account/Login');
export const SIGNUP = getApiUrl('/Account/Register');
export const RESET_PASSWORD = getApiUrl('/Account/ResetPassword');
export const GETALLCATEGORIES = getApiUrl('/LandingPage/GetCategories');
export const GETBRANDS = getApiUrl('/LandingPage/GetBrands');
export const GET_SECTION_PRODUCT_TRACKS = getApiUrl(
  '/Page/GetSectionProductTracks/',
);

// let apiBaseUrl = 'https://fakestoreapi.com/';
const getSectionProductTracks = () =>
  new Promise((resolve, reject) => {
    // const productsEndpoint = apiBaseUrl + 'products';
    const productsEndpoint =
      GET_SECTION_PRODUCT_TRACKS + '19657c26-92cd-4982-ca91-08d9614b69bd';
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

const getAllCategories = () =>
  new Promise((resolve, reject) => {
    const catEndPoint = GETALLCATEGORIES;
    fetch(catEndPoint)
      .then(res => res.json())
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
        console.log('error');
      });
  });

const getBrands = () =>
  new Promise((resolve, reject) => {
    const brandsEndPoint = GETBRANDS;
    fetch(catEndPoint)
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
  getSectionProductTracks,
  getAllCategories,
  getBrands,
};
