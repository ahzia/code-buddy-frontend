import baseURL from '../app/api';

const endPointUser = `${baseURL}/users`;

const getUserReservedMeetings = async (userId) => new Promise((resolve, reject) => {
  fetch(`${endPointUser}/${userId}/reservations`)
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

export default { getUserReservedMeetings };
