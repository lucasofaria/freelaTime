import { User } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  user: User | null;
  setAuth: (authUser: User | null) => void;
  getUserName: () => string;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  function setAuth(authUser: User | null) {
    setUser(authUser);
  }

  function getUserName(): string {
    const name = user?.identities?.[0]?.identity_data?.name;
    return name || "Usuário";
  }

  return (
    <AuthContext.Provider value={{ user, setAuth, getUserName }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)