import axios from 'axios';
import {BASE_URL} from '.';

export const api_example = async payload => {
  const uri = `${BASE_URL}/`;
  try {
    const response = await axios.get(uri);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw error.response.data;
    }
    throw new Error('Something weng wrong!');
  }
};
