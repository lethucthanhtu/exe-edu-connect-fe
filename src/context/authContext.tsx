import { createContext, ReactNode, useState } from 'react';
import { Outlet } from 'react-router-dom';

type TAuthContextProps = {
  // auth: boolean;
  // setAuth: (newAuth: boolean) => void;
  token: string;
  setToken: (newToken: string) => void;
};

const initAuthContext: TAuthContextProps = {
  // auth: false,
  // setAuth: () => {},
  token: null,
  setToken: () => {},
};

const AuthContext = createContext<TAuthContextProps>(initAuthContext);
export { AuthContext };

type TAuthProviderProps = { children?: ReactNode };

const AuthProvider = ({ children }: TAuthProviderProps) => {
  const [token, setToken] = useState(initAuthContext.token);

  return (
    <>
      <AuthContext.Provider value={{ token, setToken }}>
        {children || <Outlet context={{ token, setToken }} />}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
