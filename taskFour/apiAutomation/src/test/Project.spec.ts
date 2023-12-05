import { ServiceBase } from "../../base/ServiceBase";
import { ProjectResponse } from "../../models/response/ProjectsResponse";
import { ProjectsService } from "../../models/service/ProjectService";

describe("Get projects", () => {
    const projectsService = new ProjectsService();
    const serviceBase = new ServiceBase("/projects");

    it("Get projects without authentication", async () => {
        const response = await projectsService.getProjects<ProjectResponse>();
        response.status.should.equal(401, JSON.stringify(response.data));
    });

    it("Get projects with authentication", async () => {
        await serviceBase.authenticate(); 
        const config = serviceBase.getDefaultConfig(); 
        const authorizationHeader = config.headers?.Authorization as string; 
        const customConfig = {
            headers: {
                "Authorization": authorizationHeader,
            },
        };
        const response = await projectsService.getProjects<ProjectResponse>(customConfig); 
        response.status.should.equal(200, JSON.stringify(response.data));
    });
});
