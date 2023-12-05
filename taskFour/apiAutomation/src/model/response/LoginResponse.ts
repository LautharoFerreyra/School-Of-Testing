import { TokenModel } from "./TokenModel";

export interface LoginResponse extends TokenModel{
  message: string;
  object: TokenModel;
}