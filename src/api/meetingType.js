import baseURL from '../app/api';

const endPointMeetingType = `${baseURL}/meeting_types`;

const getMeetingTypes = async () => new Promise((resolve, reject) => {
  fetch(endPointMeetingType)
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

const getMeetingTypesMeetings = async (meetingId) => new Promise((resolve, reject) => {
  fetch(`${endPointMeetingType}/${meetingId}/meetings`)
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

export { getMeetingTypes, getMeetingTypesMeetings };
