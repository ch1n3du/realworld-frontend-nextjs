/*
 * Request Types
*/

import { z, TypeOf } from "zod"
import dotenv from "dotenv";

dotenv.config();
// TODO Replace with 'process.env.API_URL' and fix
const API_URL = "http://localhost:8080/api";

type LoginUserData = {
    email: string,
    password: string,
}
type LoginRequest = {
    user: LoginUserData
}

type RegisterUserData = {
    username: string,
    email: string,
    password: string,
}
type RegisterUserRequest = {
    user: RegisterUserData
}

type UpdateUserData = {
    username?: string,
    email?: string,
    password?: string,
    bio?: string,
    image?: string
}
type UpdateUserRequest = {
    user: UpdateUserData
}

/*
 * Response Types 
 */
type ResponseError = {
    message: string,
    errors?: { message: string }[],
    body?: string[],
}

function formatError(rawError: ResponseError) {
    if (rawError.errors != undefined) {
        let errors = rawError.errors;
        let errorBody: string = errors
            .map(({ message }) => message)
            .reduce((accumulator, error) => `${accumulator}, ${error}`);
        return `${rawError.message}: ${errorBody}`;
    } else if (rawError.body != undefined) {
        let errors = rawError.body;
        let errorBody: string = errors
            .reduce((accumulator, error) => `${accumulator}, ${error}`);
        return `${rawError.message}: ${errorBody}.`;
    } else {
        return rawError.message;
    }
}

const UserResponseSchema = z.object({
    user: z.object({
        email: z.string().email(),
        token: z.string(),
        username: z.string(),
        bio: z.string(),
        image: z.string().nullable()
    })
})
export type UserResponse = TypeOf<typeof UserResponseSchema>;

const statusIsOk = (status: number) => (status > 199 && status < 300);

export class Requests {
    static async loginUser(
        loginData: LoginUserData
    ): Promise<UserResponse | string> {
        let requestBody: LoginRequest = { user: loginData };
        let response = await fetch(`${API_URL}/users/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(requestBody),
        });
        let rawResponse = await response.json();
        console.log(`RESPONSE_STATUS: ${response.status}`);
        console.log(`RESPONSE_JSON: ${JSON.stringify(rawResponse)}`);

        if (!(statusIsOk(response.status))) {
            let error: ResponseError = rawResponse;
            return formatError(error);
        }
        let userResponse: UserResponse = UserResponseSchema.parse(rawResponse);

        return userResponse
    }

    static async registerUser(
        registerData: RegisterUserData
    ): Promise<UserResponse | string> {
        let requestBody: RegisterUserRequest = { user: registerData };
        let response = await fetch(`${API_URL}/users/`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(requestBody),
        });
        let rawResponse = await response.json();
        console.log(`RAW_RESPONSE: ${JSON.stringify(rawResponse)}`);

        if (!(statusIsOk(response.status))) {
            let error: ResponseError = rawResponse;
            return formatError(error);
        }
        let userResponse: UserResponse = UserResponseSchema.parse(rawResponse);

        return userResponse;
    }

    // //! Requires Auth
    // static async getCurrentUser(
    //     { jwt }: { jwt: string }
    // ): Promise<UserResponse> { }

    //! Requires Auth
    // static async updateUser(
    //     { jwt, updateData }: {
    //         jwt: string,
    //         updateData: UpdateUserData
    //     }
    // ): Promise<UserResponse> { }

    // static async getProfile({ jwt, username }: { jwt: string, username: string }) { }

    // static async followUser({ jwt, username }: { jwt: string, username: string }) { }

    // static async unfollowUser({ jwt, username }: { jwt: string, username: string }) { }

    // static async listArticles({ jwt, username }: { jwt: string, username: string }) { }

    // static async feedArticles({ jwt, username }: { jwt: string, username: string }) { }

    // static async getArticle({ slug }: { slug: string }) { }

    // static async updateArticle({ jwt, slug }: { jwt: string, slug: string }) { }

    // static async deleteArticle({ jwt, slug }: { jwt: string, slug: string }) { }

}