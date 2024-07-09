import BadRequest from "./badRequest.js";

class ValidationError extends BadRequest {
    constructor(
        error
    ) {
        const messageError = Object.values(error.errors)
            .map(errorValue => errorValue.message)
            .join("; ")
        super(`${messageError}`)
    }
}

export default ValidationError