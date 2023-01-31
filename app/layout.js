import "../styles/globals.css";
import { GlobalProvider } from "context/GlobalState";
import { AuthProvider } from "context/authContext";
import Navbar from "Components/navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <AuthProvider>
          <GlobalProvider>
            <Navbar />
            {children}
          </GlobalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
