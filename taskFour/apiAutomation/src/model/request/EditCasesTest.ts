export interface EditTestCaseModel {
    casePriority: string,
    caseName: string,
    preconditions?: string,
    expectedResult?: string,
    labels?: string[],
    body: null, 
}