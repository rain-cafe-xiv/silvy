export class SilvyApiError extends Error {
    status: number;
    code: string;

    constructor(message: string | SilvyApiError.Options) {
        const options = typeof (message) === 'object' ? message : {
            message,
            status: 500,
            code: 'internal_server_error'
        };

        super(options.message)

        this.status = options.status;
        this.code = options.code;
    }
}

// eslint-disable-next-line no-redeclare
export namespace SilvyApiError {
    export interface Options {
        message: string;
        status: number;
        code: string;
    }
}