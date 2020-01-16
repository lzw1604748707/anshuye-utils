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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var FileManageUtils = /** @class */ (function () {
    function FileManageUtils() {
    }
    /**
     * 扁平化文件目录
     * @param dir  文件目录地址
     * @param dirName  指定遍历的子文件目录名
     * @param encode  文件目录编码
     */
    FileManageUtils.prototype.flatDirList = function (dir, dirName, encode) {
        var _this = this;
        if (encode === void 0) { encode = 'utf-8'; }
        var fileUrlList = [];
        var fileList = fs_1.default.readdirSync(dir, encode);
        fileList.forEach(function (file) {
            var fileUrl = dir + '' + file;
            var stats = fs_1.default.lstatSync(fileUrl);
            if (stats.isDirectory()) {
                var folderName = path_1.default.basename(fileUrl);
                if (!dirName || folderName === dirName) {
                    var childrenList = _this.flatDirList(fileUrl + '/', dirName, encode);
                    fileUrlList = __spreadArrays(fileUrlList, childrenList);
                }
            }
            else {
                fileUrlList.push(fileUrl);
            }
        });
        return fileUrlList;
    };
    /**
     * 根据文件地址动态加载模块
     * @param fileUrl  文件地址
     */
    FileManageUtils.prototype.loadSingleModule = function (fileUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var name, module;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = path_1.default.basename(fileUrl).split('.')[0];
                        return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(fileUrl)); })];
                    case 1:
                        module = _a.sent();
                        return [2 /*return*/, { name: name, module: module }];
                }
            });
        });
    };
    /**
     * 读取文件目录中的所有模块
     * @param dir  文件目录
     * @param encode  目录编码
     */
    FileManageUtils.prototype.loadMultipleModule = function (dir, dirName, encode) {
        if (encode === void 0) { encode = 'utf-8'; }
        return __awaiter(this, void 0, void 0, function () {
            var moduleList, fileUrlList, _i, fileUrlList_1, url, module_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moduleList = [];
                        fileUrlList = this.flatDirList(dir, dirName, encode);
                        _i = 0, fileUrlList_1 = fileUrlList;
                        _a.label = 1;
                    case 1:
                        if (!(_i < fileUrlList_1.length)) return [3 /*break*/, 4];
                        url = fileUrlList_1[_i];
                        return [4 /*yield*/, this.loadSingleModule(url)];
                    case 2:
                        module_1 = _a.sent();
                        moduleList.push(module_1);
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, moduleList];
                }
            });
        });
    };
    return FileManageUtils;
}());
exports.default = FileManageUtils;
