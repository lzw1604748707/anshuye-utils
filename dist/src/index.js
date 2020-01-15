"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 工具类引入
var fileManage_1 = __importDefault(require("./utils/fileManage"));
var array_1 = __importDefault(require("./utils/array"));
var object_1 = __importDefault(require("./utils/object"));
exports.arrayUtils = new array_1.default();
exports.objectUtils = new object_1.default();
exports.fileManageUtils = new fileManage_1.default();
