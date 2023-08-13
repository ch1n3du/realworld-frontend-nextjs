import { useEffect, useState } from "react";
import { UserResponse } from "./requests";

export function validateEmail(email: string): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    return (false)
}

export function useLocalStorage<T>(key: string, fallbackValue: T) {
    const [value, setValue] = useState(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? JSON.parse(stored) : fallbackValue);
    }, [fallbackValue, key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}

export function setUserData(user: UserResponse) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function getUserData(): UserResponse | null {
    let stored = localStorage.getItem('user');
    if (stored !== null) {
        return JSON.parse(stored);
    } else {
        return null;
    }
}

/**
 * user
 * user@gmail.com
 * password
 */