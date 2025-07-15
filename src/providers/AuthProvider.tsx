import { useState, type ReactNode } from "react";
import type { User } from "../types";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<User>();
    return (
        <AuthContext.Provider value={{user, setUser}}>
        {children}
        </AuthContext.Provider>
    )
}