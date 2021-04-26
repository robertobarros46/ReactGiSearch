import React, { useState, createContext } from "react";

export const RepoContext = createContext<Partial<ContextType>>({});

export const ContextProvider: React.FC = ({ children }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  return (
    <RepoContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </RepoContext.Provider>
  );
};