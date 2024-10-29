import {HttpException, ErrorCode } from "./root.js";

export class UnauthorizedException extends HttpException{
    constructor(message: string, errorCode: ErrorCode){
        super(message, errorCode, 401, null);
    }
}