import React from "react";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* Uncomment to toggle view */}
      {/* <AuthPage /> */}
      <Dashboard />
    </div>
  );
}

export default App;
