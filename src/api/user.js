import baseURL from '../app/api';

const endPointUser = `${baseURL}/users`;
// const endPointUserDetails = `${endPointUser}/user_details`;
const loginOrRegister = async (userName) => new Promise((resolve, reject) => {
  fetch(`${endPointUser}/login-register?user_name=${userName}`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        response.json().then((data) => {
          reject(new Error(`${data.error}: ${data.message}`));
        });
      }
    })
    .catch((error) => {
      reject(new Error(`Server Error: ${error.message}`));
    });
});

const getUserMeetings = async (userId) => new Promise((resolve, reject) => {
  fetch(`${endPointUser}/${userId}/meetings`)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          resolve(data);
        });
      } else {
        response.json().then((data) => {
          reject(new Error(`${data.error}: ${data.message}`));
        });
      }
    })
    .catch((error) => {
      reject(new Error(`Server Error: ${error.message}`));
    });
});

export { loginOrRegister, getUserMeetings };
