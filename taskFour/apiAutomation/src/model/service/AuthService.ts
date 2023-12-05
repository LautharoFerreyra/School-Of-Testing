import { BaseService } from '../../base/BaseService';
import { LoginRequest } from '../request/LoginRequest';
import { LoginResponse } from '../response/LoginResponse';
import { sendRequest } from '../../utils/request';

export class AuthService extends BaseService {
    constructor() {
      super(process.env['BASE_URL'] || ''); // Cambia esta línea
    }
  
    async loginUser(request: LoginRequest): Promise<LoginResponse> {
      const options = {
        uri: `${this.baseUrl}`,
        method: 'POST',
        json: true,
        body: request
      };
  
      return sendRequest(options);
    }
  }