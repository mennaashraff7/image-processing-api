"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("../../utilities/validation"));
describe('test validation', () => {
    it('validation test', () => {
        expect(validation_1.default).toBeTruthy;
    });
});
