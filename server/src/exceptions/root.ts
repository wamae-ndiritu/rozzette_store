// message, status code, error codes, error
export class HttpException extends Error {
    message: string;
    errorCode: ErrorCode;
    statusCode: number;
    errors: any;

    constructor(message: string, errorCode: ErrorCode, statusCode: number, error: any){
        super(message)
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = error;
    }
}

export enum ErrorCode {
    UNAUTHORIZED = 1000,
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INCORRECT_PASSWORD = 1003,
    EMPTY_FIELDS = 1004,
    UPROCESSABLE_ENTITY = 2001,
    INTERNAL_EXCEPTION = 3001

}
