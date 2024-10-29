import { HttpException } from "./root.js";

export class UnprocessableEntity extends HttpException{
    constructor(error: any, message: string, errorCode: number){
        super(message, errorCode, 422, error)
    }
}