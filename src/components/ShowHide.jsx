import React, { useState } from "react";

const ShowHidePw = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input_box">
      <input type={showPassword ? 'text' : 'password'} placeholder="Contraseña" name='lcontraseña' id='lcontraseña' required />
      <i className="uil uil-lock password"></i>
      <i className={`uil ${showPassword ? "uil-eye" : "uil-eye-slash"} pw_hide`}
        onClick={handleTogglePassword}></i>
    </div>
  );
};

export default ShowHidePw;
