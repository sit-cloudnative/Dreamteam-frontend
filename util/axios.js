import axios from 'axios'
import Router from 'next/router'
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
    baseURL: 'https://dreamteam-materialservice.mybluemix.net/',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
}

export const errorChecker = (response) => {
  if(response.status == 200){
    return true
  }else if(response.status == 401 ){
    localStorage.clear
    Router.push('/login')
    return false
  }else{
    Router.push('/oops')    
    return false
  }
}