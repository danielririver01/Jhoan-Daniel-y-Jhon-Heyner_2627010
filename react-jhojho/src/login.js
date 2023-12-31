import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); // Utiliza el hook `useAuth0` para obtener la función `loginWithRedirect`

    return (
        <button onClick={() => loginWithRedirect()}>Login</button> // Botón de inicio de sesión que llama a `loginWithRedirect` cuando se hace clic
    );
}
