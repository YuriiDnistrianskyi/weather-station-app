// gpt

import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export async function setItem(key: string, value: string): Promise<void> {
    try {
        if (Platform.OS === "web") {
            localStorage.setItem(key, value);
            return;
        }
        await SecureStore.setItemAsync(key, value);
    } catch (e) {
        console.error("[storage] setItem error:", e);
        throw e;
    }
}

export async function getItem(key: string): Promise<string | null> {
    try {
        if (Platform.OS === "web") {
            return Promise.resolve(localStorage.getItem(key));
        }
        return await SecureStore.getItemAsync(key);
    } catch (e) {
        console.error("[storage] getItem error:", e);
        return null;
    }
}

export async function removeItem(key: string): Promise<void> {
    try {
        if (Platform.OS === "web") {
            localStorage.removeItem(key);
            return;
        }
        await SecureStore.deleteItemAsync(key);
    } catch (e) {
        console.error("[storage] removeItem error:", e);
        throw e;
    }
}
