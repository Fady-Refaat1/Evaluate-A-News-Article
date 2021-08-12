import { checkUrl } from "../js/urlChecker"

describe("Testing the check url functionality", () => {
    test("Testing the checkUrl function", () => {
        expect(checkUrl).toBeDefined();
    })
    test('false url ',()=>{
        const check = checkUrl('yhut./;khliviy')
        expect(check).toBeFalsy()
    })
    test('true url ',()=>{
        const check = checkUrl('https://www.romlkbkjsos.com')
        expect(check).toBeTruthy()
    })
});