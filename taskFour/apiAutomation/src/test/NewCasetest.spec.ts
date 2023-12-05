import chai from "chai";
import { TestCaseService } from "../model/service/TestCaseService.js";
import { ServiceBase } from "../base/ServiceBase.js";
import { AddNewRequest } from "../model/request/AddNewRequest.js";
import {  CreateTestCaseResponse } from "../model/response/NewCaseTest.js";

chai.should();

describe("Create test case", () => {
    const testCaseService = new TestCaseService();
    const serviceBase = new ServiceBase("/projects/PROJECT2/");
    const { PROJECTID } = process.env;
    let headerConfig: string;
    let suiteId: string;

    const payload: CreateTestCaseModel = {
        caseName: "test-case-added",
    };

    beforeEach(async () => {
        await serviceBase.Authenticate();
        const config = serviceBase.getDefaultConfig();
        headerConfig = config.headers?.Authorization as string;
    });

    const createTestCase = async <T>(customConfig: any) => {
        const response = await testCaseService.createTestCase<T>(payload, suiteId, customConfig);
        return response;
    };

    it("Should return status code 201", async () => {
        const customConfig = {
            headers: {
                Authorization: headerConfig,
            },
        };
        const response = await createTestCase<CreateTestCaseModel>(customConfig);
        response.status.should.equal(201, JSON.stringify(response.data));
    });

    it("Message response should say: 'Test case successfully created.'", async () => {
        const customConfig = {
            headers: {
                Authorization: headerConfig,
            },
        };
        const response = await createTestCase<CreateTestCaseResponse>(customConfig);
        response.data.message.should.equal("Test case successfully created.");
    });
});
