import { AxiosRequestConfig } from "axios";
import { ServiceBase } from "../../base/ServiceBase.js";
import { CreateTestCaseModel } from "../request/CreateTestCaseModel.js";
import { Response } from "../responses/Response.js";
import { EditTestCaseModel } from "../request/EditTestCaseModel.js";
import { DeleteTestCaseModel } from "../request/DeleteTestCaseModel.js";

export class TestCaseService extends ServiceBase {
    constructor() {
        super("/projects/PROJECT1698869363430/suites");
    }

    async createTestCase<T>(
        payload: CreateTestCaseModel,
        suiteId: string,
        auth: AxiosRequestConfig
    ): Promise<Response<T>> {
        const url = `${this.url}/${suiteId}/test-cases`;
        return await this.api.client.post(url, payload, auth);
    }

    async editTestCase<T>(
        caseId: string,
        payload: EditTestCaseModel,
        suiteId: string,
        auth: AxiosRequestConfig
    ): Promise<Response<T>> {
        const url = `${this.url}/${suiteId}/test-cases/${caseId}`;
        return await this.api.client.put(url, payload, auth);
    }

    async getTestCase<T>(
        caseId: string,
        suiteId: string,
        auth: AxiosRequestConfig
    ): Promise<Response<T>> {
        const url = `${this.url}/${suiteId}/test-cases/${caseId}`;
        return await this.api.client.get(url, auth);
    }

    async deleteTestCase<T>(
        payload: DeleteTestCaseModel,
        suiteId: string,
        auth: AxiosRequestConfig
    ): Promise<Response<T>> {
        const url = `${this.url}/${suiteId}/test-cases`;
        return await this.api.client.patch(url, payload, auth);
    }
}
