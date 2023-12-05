import axios, { AxiosRequestConfig } from 'axios';

export const sendRequest = async (options: AxiosRequestConfig): Promise<any> => {
  try {
    const response = await axios(options);
    return response.data; // axios devuelve una propiedad 'data'
  } catch (error) {
    throw error;
  }
};