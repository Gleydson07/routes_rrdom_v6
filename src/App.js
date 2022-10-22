import { AuthenticationProvider } from "./hooks/useAuth";
import { Routes } from "./routes";

function App() {
  return (
    <AuthenticationProvider>
      <Routes/>
    </AuthenticationProvider>
  );
}

export default App;
