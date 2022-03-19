"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const validation = (req, res, next) => {
    const imgName = req.query.imgName;
    const width = req.query.width;
    const height = req.query.height;
    if (!imgName) {
        res.send('please insert the missing field');
    }
    if (!width) {
        res.send('please insert the missing field');
    }
    if (!height) {
        res.send('please insert the missing field');
    }
    if (parseInt(width) <= 0 || parseInt(height) <= 0) {
        res.send('please insert positive values');
    }
    if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
        res.send('please insert a number for the dimensions!!!!!!!!!');
    }
    try {
        if (!fs_1.default.existsSync('images/' + imgName)) {
            //file exists
            res.send('please insert available image name');
        }
    }
    catch (error) {
        res.send(error);
    }
    next();
};
exports.default = validation;
