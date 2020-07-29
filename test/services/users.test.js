const userService = require("../../src/services/users");

let repositoryMock;
beforeEach(() => {
    repositoryMock = {getById: jest.fn().resolves({id: 1}) };
})

describe('services', () => {
    describe("users", () => {
        describe("getById", () => {
            test ("should return user in found", () => {
                const user = await userService.getById(1);
                expect(user).toBeDefined();
            });
        });
    });
});