import {HttpException, ErrorCode } from "./root.js";

export class BadRequestsException extends HttpException{
    constructor(message: string,  errorCode: ErrorCode, error: any){
        super(message, errorCode, 400, error);
    }
}