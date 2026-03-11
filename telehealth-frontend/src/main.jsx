// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// // import { AuthProvider } from "./context/AuthContext";

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//   //   <App />
//   // </StrictMode>,
//   <GoogleOAuthProvider clientId="1084870552954-ikivu2k452lo6rbs3dasbimvjmbe0kae.apps.googleusercontent.com">
//   <BrowserRouter>
//     {/* <AuthProvider> */}
//       <App />
//     {/* </AuthProvider> */}
//   </BrowserRouter>
//   </GoogleOAuthProvider>

// )

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="658249176534-k8tiv9p5ienbkntheg7hkesm4f14m50f.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
