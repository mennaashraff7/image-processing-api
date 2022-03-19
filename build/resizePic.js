"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const validation_1 = __importDefault(require("./utilities/validation"));
const path_1 = __importDefault(require("path"));
const resize_1 = __importDefault(require("./utilities/resize"));
const index_1 = __importDefault(require("./index"));
const resizePic = index_1.default;
//endpoint
resizePic.get('/', validation_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("resizePic");
    const imgName = req.query.imgName;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const imgPath = 'images/thumbnail/' + width + 'x' + height + '-' + imgName;
    try {
        if (fs_1.default.existsSync(imgPath)) {
            //file exists
            res.sendFile(path_1.default.resolve('images/thumbnail/' + width + 'x' + height + '-' + imgName));
        }
        else {
            yield (0, resize_1.default)(imgName, width, height);
            res.sendFile(path_1.default.resolve('images/thumbnail/' + width + 'x' + height + '-' + imgName));
        }
    }
    catch (err) {
        console.error(err);
    }
}));
//routes
// resizePic.use('/resize', resizePic);
exports.default = resizePic;
