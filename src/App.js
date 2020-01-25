import React from "react";
import "./App.css";
import Login  from './components/Login'
import Header  from './components/Header'
import Home  from './components/Home'

export const AuthContext = React.createContext(); // added this

function App() {
return (
    <AuthContext.Provider>
            <div className="App"></div>
     </AuthContext.Provider>

  );
}
export default App;