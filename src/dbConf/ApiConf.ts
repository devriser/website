export const ApiResponseSuccess = ({ status_code, message, data }: { status_code: number, message: string, data?: any | undefined }) => {
    if (data) {
        return {
            status_code,
            status: "success",
            message,
            data
        }
    }
    return {
        status_code,
        status: "success",
        message
    }
}

export const ApiResponseFailed = ({ status_code, message, data }: { status_code: number, message: string, data?: any | undefined }) => {
    if (data) {
        return {
            status_code,
            status: "failed",
            message,
            data
        }
    }
    return {
        status_code,
        status: "failed",
        message
    }
}