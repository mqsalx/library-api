import BaseError from "./baseError.js";


class BadRequest extends BaseError {

    constructor(
        message = "One or more data provided is incorrect",
        status = 400
    ) {
        super(message, status)
    }
}

export default BadRequest