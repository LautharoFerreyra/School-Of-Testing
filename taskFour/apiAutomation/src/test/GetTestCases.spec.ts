import chai from "chai";
import "dotenv/config";
import { TestCaseService } from "../../../models/services/TestCaseService.js";
import { ServiceBase } from "../../../base/ServiceBase.js";
import { SuitesService } from "../../../models/services/SuitesService.js";
import { CreateTestCaseModel } from "../../../models/request/CreateTestCaseModel";
import { CreateSuiteResponse } from "../../../models/responses/CreateSuiteResponse.js";
import { CreateTestCaseResponse } from "../../../models/responses/CreateTestCaseResponse.js";
import { TestCaseResponse } from "../../../models/responses/TestCaseResponse.js";