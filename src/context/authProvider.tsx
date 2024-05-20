import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  auth: boolean;
  setAuth: (newState: boolean) => void;
};

const initialValue = {
  auth: false,
  setAuth: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  //Initializing an auth state with false value (unauthenticated)
  const [auth, setAuth] = useState(
    initialValue.auth
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
