import BaseError from './baseError.js';


class NotFound extends BaseError {
    constructor(
        message = "Not found",
        status = 404
    ) {
        super(
            message,
            status
        )
    }
}

export default NotFound