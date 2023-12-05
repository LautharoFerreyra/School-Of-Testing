export interface ProjectsResponse{
    isSuperAdmin: boolean,
    activeProjects: number,
    completedProjects: number,
    projects: [
        {
            projectId: string,
            name: string,
            suites: number,
            runs: number,
            userRole: string
        }
    ]
}