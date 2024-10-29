import { HttpException } from "./root.js";

export class NotFoundException extends HttpException{
    constructor(message: string, errorCode: number){
        super(message, errorCode, 404, null)
    }
}