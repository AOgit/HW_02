import { createContext } from "react";
import type { User } from "../types";

interface AuthContextType {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);



