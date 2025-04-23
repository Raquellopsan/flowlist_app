import React, { useActionState, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [Valor, setValor] = useState({
    email: "",
    contraseña: "",
  });

  const change = (evento) => {
    const { name, value } = evento.target;
    setValor({ ...Valor, [name]: value });
  };

  {
    /*console.log(Valor);*/
  }

  const login = async (evento) => {
    evento.preventDefault();
    try {
      const respuesta = await axios.post(
        "http://localhost:4000/api/v1/login",
        Valor,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("userLoggedIn", "yes");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {/*investigando descubrí que la medida vw equivale al % en css, por lo tanto tiene un with de 60% */}
      <div className="w-[60vw] md:w-[50vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-[#815BCE]">
          Flowlist
        </h1>
        <h3 className="text-center font-semibold text-[#A4A2A2] ">
          Inicia sesión en Flowlist
        </h3>
        <div className="w-[60vw] md:w-[50vw] lg:w-[30vw] mt-4">
          <form
            autoComplete="on"
            className="flex flex-col gap-4"
            onSubmit={login}
          >
            <input
              type="email"
              required
              placeholder="email"
              className="border rounded px-4 py-2 border-[#FA9F42] w-[100%] outline-none placeholder-[#A4A2A2] text-[#FFB468] focus:shadow-[0_0_10px_#FA9F42]"
              name="email"
              value={Valor.email}
              onChange={change}
              autoComplete="email"
            />

            <input
              type="password"
              required
              placeholder="contraseña"
              className="border rounded px-4 py-2 border-[#FA9F42] w-[100%] outline-none placeholder-[#A4A2A2] text-[#FFB468] focus:shadow-[0_0_10px_#FA9F42]"
              name="contraseña"
              value={Valor.contraseña}
              onChange={change}
              autoComplete="current-password"
            />

            <button className="bg-[#FA9F42] text-white font-semibold py-2 rounded hover:bg-[#FFB972]   transition all duration-300">
              Iniciar sesión
            </button>

            <p className="text-center text-[#A4A2A2]">
              ¿No tienes una cuenta?{" "}
              <Link to={"/registro"} className="text-[#815BCE] font-semibold">
                Registrarse
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
