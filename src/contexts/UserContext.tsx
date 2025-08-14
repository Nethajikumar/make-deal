import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'buyer' | 'seller' | null;

interface UserContextType {
  role: UserRole;
  isOnboarded: boolean;
  setRole: (role: UserRole) => void;
  setOnboarded: (onboarded: boolean) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);

  const setOnboarded = (onboarded: boolean) => {
    setIsOnboarded(onboarded);
  };

  const logout = () => {
    setRole(null);
    setIsOnboarded(false);
  };

  return (
    <UserContext.Provider
      value={{
        role,
        isOnboarded,
        setRole,
        setOnboarded,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};