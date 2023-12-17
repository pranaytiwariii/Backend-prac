class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        error=[],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null 
        this.message = message
        this.errors = errors

        if (statch){
            this.stack = statch
        }
        else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {ApiError}