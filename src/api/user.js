import baseURL from '../app/api';

const endPointUser = `${baseURL}/users`;
// const endPointUserDetails = `${baseURL}/user`;
const endPoinLoginOrRegister = `${endPointUser}/login-register`;

const loginOrRegister = async (userName) => new Promise((resolve, reject) => {
  fetch(`${endPoinLoginOrRegister}?user_name=${userName}`)
    .then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        // Backend Error Handing Using Status and Error Message
        response.json().then((data) => {
          console.log(data);
        });
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default (loginOrRegister);
