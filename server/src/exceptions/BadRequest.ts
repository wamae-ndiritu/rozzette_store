import {HttpException, ErrorCode } from "./root.js";

export class BadRequestsException extends HttpException{
    constructor(message: string, errorCode: ErrorCode){
        super(message, errorCode, 400, null);
    }
}