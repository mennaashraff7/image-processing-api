"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../../utilities/resize"));
describe('test resize function', () => {
    it('resizes the photo', () => {
        expect(resize_1.default).not.toThrowError;
    });
    it('resizes the photo', () => {
        expect((0, resize_1.default)('fjord.jpg', 200, 400)).toBeTruthy;
    });
    it('does not resizes the photo', () => {
        expect((0, resize_1.default)('', 1, 1)).toBeFalsy;
    });
});
