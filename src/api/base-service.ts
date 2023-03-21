// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosInstance } from 'axios';

export default class BaseService {
 axiosInstance: AxiosInstance

 constructor(baseUrl: string) {
   if (this.constructor === BaseService) {
     throw new TypeError('Abstract class "BaseService" cannot be instantiated directly.');
   }

   this.axiosInstance = axios.create({
     baseURL: baseUrl,
   });
 }
}
