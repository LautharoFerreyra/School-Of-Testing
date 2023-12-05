
import { expect } from 'chai';
import { AuthService } from '../model/services/AuthService';
import { LoginRequest } from '../model/request/LoginRequest';

describe('Login Test', () => {
  it('should login successfully with correct credentials', async () => {
    const authService = new AuthService();
    const request: LoginRequest = { username: 'lautharoferreyra@gmail.com', password: 'Optimo1881!' };
    const response = await authService.loginUser(request);
    expect(response.success).to.be.true;
  });

  it('should fail to login with incorrect credentials', async () => {
    const authService = new AuthService();
    const request: LoginRequest = { username: 'asdasd', password: 'holahola' };
    const response = await authService.loginUser(request);
    expect(response.success).to.be.false;
  });
});