import baseURL from '../app/api';

const endPointMeeting = `${baseURL}/meetings`;

const getAllMeetings = async () => new Promise((resolve, reject) => {
  fetch(endPointMeeting)
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

export default getAllMeetings;
