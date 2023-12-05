import { ServiceBase } from "../../base/ServiceBase.js";
import { Response } from "../response/Response.js";

export class ProjectService extends ServiceBase{
	constructor(){
		super("/projects");
	}

	async getProjects<T>(config = this.defaultConfig): Promise<Response<T>>{
		return await this.api.client.get(this.url, config);
	}
}