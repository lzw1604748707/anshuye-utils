/// <reference types="node" />
import fs from 'fs';
export default class FileManageUtils {
    /**
     * 扁平化文件目录
     * @param dir  文件目录地址
     * @param encode  文件目录编码
     */
    flatDirList(dir: fs.PathLike, encode?: string): string[];
    /**
     * 根据文件地址动态加载模块
     * @param fileUrl  文件地址
     */
    loadSingleModule(fileUrl: string): Promise<{
        name: string;
        module: any;
    }>;
    /**
     * 读取文件目录中的所有模块
     * @param dir  文件目录
     * @param encode  目录编码
     */
    loadMultipleModule(dir: fs.PathLike, encode?: string): Promise<{
        name: string;
        module: any;
    }[]>;
}
