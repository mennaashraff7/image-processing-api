"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('test endpoint responses', () => {
    it('the endpoint of index should return a status of 200', () => {
        request
            .get('/api?imgName=fjord.jpg&width=200&height=200')
            .then((response) => {
            expect(response.statusCode).toBe(200);
        });
    });
    it('the endpoint of index should return a status close to 200', () => {
        request
            .get('/api?imgName=fjord.jpg&width=200&height=200')
            .then((response) => {
            expect(response.statusCode).toBeCloseTo(200);
        });
    });
});
