import React, { createContext, useContext, useState } from "react";

type User = {
  username: string;
  password: string;
};

type ContextProps = {
  user: User;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<ContextProps | undefined>(undefined);

// Hook yaratish
// Auth komponenti
export const Auth = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  // Foydalanuvchi ma'lumotlarini saqlash uchun

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
