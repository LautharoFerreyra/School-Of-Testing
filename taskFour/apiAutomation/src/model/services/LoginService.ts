import { Response } from "../response/Response";
import { CredentialsModels } from "../request/CredentialModel";
import { ServiceBase } from "../../base/ServiceBase";

export class AuthService extends ServiceBase{
    constructor(){
        super("/login");

    } 
    async logIn <T>(credentials: CredentialsModels): Promise<Response<T>> {
        return await this.api.client.post(this.url, credentials);
}}