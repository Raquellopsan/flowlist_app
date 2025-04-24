import React from "react";
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ setAñadirTareaDiv }) => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const respuesta = await axios.post(
        "http://localhost:4000/api/v1/logout",
        {},
        { withCredentials: true }
      );
      alert(respuesta.data.message);
      localStorage.clear("userLoggedIn");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex px-12 py-4 items-center justify-between border-b">
      <div>
        <h1 className="text-2xl text-[#815BCE] font-semibold">Flowlist</h1>
      </div>
      <div className="flex gap-8">
        <button
          className="text-2xl text-[#636262] hover:text-[#FA9F42] transition-all duration-300"
          onClick={() => setAñadirTareaDiv("block")}
        >
          <IoAddCircleOutline />
        </button>
        <button
          className=" text-2xl text-[#636262]  hover:text-red-800 transition-all duration-300"
          onClick={logout}
        >
          <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
};

export default Header;
