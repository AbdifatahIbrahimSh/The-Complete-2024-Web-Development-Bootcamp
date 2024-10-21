import Login from "./components/Login";
import Register from "./components/Register"


let isAuthenticated = true;

function App() {
  return isAuthenticated ? <Login /> : <Register />;
}
    
 
 
export default App;
