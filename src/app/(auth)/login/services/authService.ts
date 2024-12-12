export interface LoginRequestDto {
<<<<<<< HEAD
    email: string;
    password: string;
  }
  
  export interface AuthResponseDto {
    id: number;
    username: string;
    token: string;
  }  
=======
  email: string;
  password: string;
}

export interface AuthResponseDto {
  id: number;
  username: string;
  token: string;
}
>>>>>>> d86d7ce (arreglo)

export const loginUser = async (credentials: LoginRequestDto): Promise<AuthResponseDto | null> => {
  try {
    console.log("Iniciando solicitud de inicio de sesión con:", credentials);
<<<<<<< HEAD
    console.log("Datos enviados al backend:", credentials);

    const response = await fetch("http://144.33.15.219:8080/auth/login", {
=======
    //console.log("Datos enviados al backend:", credentials);

    const response = await fetch("/api/auth/login", { // Utilizando el proxy configurado en next.config.js
>>>>>>> d86d7ce (arreglo)
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    console.log("Respuesta completa:", response);
    console.log("Estado de la respuesta:", response.status);
    if (!response.ok) {
      const errorData = await response.json();
<<<<<<< HEAD
      console.error("Error en la respuesta:", errorData);
=======
      // console.error("Error en la respuesta:", errorData);
>>>>>>> d86d7ce (arreglo)
      throw new Error(errorData.message || "Error al iniciar sesión");
    }

    const result: AuthResponseDto = await response.json();
<<<<<<< HEAD
    console.log("Datos de la respuesta procesada:", result);
    return result;
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error.message);
    return null;
  }
};

=======
    // console.log("Datos de la respuesta procesada:", result);
    return result;
  } catch (error: any) {
    // console.error("Error al iniciar sesión:", error.message);
    return null;
  }
};
>>>>>>> d86d7ce (arreglo)
