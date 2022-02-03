import baseURL from '../app/api';

const endPointUser = `${baseURL}/meetings`;
const endPoinLoginOrRegister = `${endPointUser}/login-register`;

const loginOrRegister = async (userName) => new Promise((resolve, reject) => {
  fetch(`${endPoinLoginOrRegister}?user_name=${userName}`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        // Backend Error Handing Using Status and Error Message
        response.json().then((data) => {
          reject(new Error(`${data.error}: ${data.message}`));
        });
      }
    })
    .catch((error) => {
      reject(new Error(`Server Error: ${error.message}`));
    });
});

export default (loginOrRegister);
