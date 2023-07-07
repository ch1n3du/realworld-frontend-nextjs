export enum Status {
    Ok = 200,
    Unauthorized = 401
}

export type ResponseError = {
    message: string,
    body: string[]
}