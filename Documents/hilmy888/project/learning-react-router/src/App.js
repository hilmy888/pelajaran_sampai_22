import React, {createContext, useState} from 'react';
import Base from './component/Base'


export const LoginContext = createContext([false, () => {}])
function LoginManager({children}) {
  const [login, setLogin] = useState(false)
  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {
        children
      }
    </LoginContext.Provider>

  )
}

function App() {
  
  return (
    <LoginManager>
      <Base />
    </LoginManager>
  );
}

export default App;
