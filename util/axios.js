import axios from 'axios'
export const userService = (token) => {
  return axios.create({
    baseURL: 'https://dreamteam-userservice.mybluemix.net',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}

export const subjectService =  (token) => {
  return axios.create({
    baseURL: 'https://dreamteam-subjectservice.mybluemix.net/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}


export const videoService =  (token) => {
  return axios.create({
    baseURL: 'https://dreamteam-videoservice.mybluemix.net/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}
export const materialService =  (token) => {
  return axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}
