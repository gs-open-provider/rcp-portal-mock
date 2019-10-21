/* eslint-disable no-console */
import axios from 'axios';

class UtilityService {
  static getRequest = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('GET request called.\nURL:', url, '\nGot Response:', response);
      return response;
    } catch (err) {
      console.log('Error while sending GET request.\nURL:', url, '\nGot Response:', err);
      return false;
    }
  }

  static authGetRequest = async (url) => {
    const token = '';
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
        }
      });
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export default UtilityService;
