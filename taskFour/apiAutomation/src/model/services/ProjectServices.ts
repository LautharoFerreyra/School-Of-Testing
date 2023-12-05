import { AxiosRequestConfig } from "axios";
import { ServiceBase } from "../../base/ServiceBase.js";
import { Response } from "../response/Response";

export class ProjectService extends ServiceBase{
	constructor(){
		super("/projects");
	}

	async getProjects<T>(auth?:AxiosRequestConfig): Promise<Response<T>>{
		return await this.api.client.get(this.url, auth);
	}
}