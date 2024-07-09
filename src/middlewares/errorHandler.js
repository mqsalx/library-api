import mongoose from "mongoose"
import baseError from "../errors/baseError.js"
import BadRequest from "../errors/badRequest.js"
import ValidationError from "../errors/validationError.js"


function errorHandler(error, req, res, next) {

    if(error instanceof mongoose.Error.CastError) {
        new BadRequest().sendResponse(res)
    } else if(error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).sendResponse(res)
    } else {
        new baseError().sendResponse(res)
    }
}

export default errorHandler