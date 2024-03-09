import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@stores/index";
import { IconKey, IconKeyOff } from "@tabler/icons-react";

export const LoginPage = () => {
  const navigate = useNavigate();
  const loginUser = useAuthStore((state) => state.loginUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Las funciones validateEmail y validatePassword retornan true si son válidos
  const validateEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  const validatePassword = (password: string) => password.length >= 8;

  // Determina si el formulario es válido para habilitar o deshabilitar el botón de envío
  const isFormValid = validateEmail(email) && validatePassword(password);

  const emailStyle =
    emailTouched && !validateEmail(email)
      ? "bg-red-200 text-red-600"
      : emailTouched
      ? "bg-green-200 text-green-600"
      : "";
  const passwordStyle =
    passwordTouched && !validatePassword(password)
      ? "bg-red-200 text-red-600"
      : passwordTouched
      ? "bg-green-200 text-green-600"
      : "";

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (!isFormValid) {
      console.log("Validación fallida");
      return;
    }

    try {
      await loginUser(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log("No se pudo autenticar");
    }
  };

  return (
    <>
      <div className="w-full mx-auto px-8 flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-white mb-2">Iniciar Sesión</h1>
        <p className="text-sm font-regular text-gray-600 mb-4">
          ¡Hola de nuevo!
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-500 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              className={`w-full p-2 border-2 rounded-md bg-[#12141c4a] ${emailStyle}`}
            />
            {emailTouched && !validateEmail(email) && (
              <p className="text-red-500 text-xs mt-1">
                El correo electrónico no es válido.
              </p>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-500 mb-2">Contraseña</label>
            <div className="flex items-center border-2 gap-2 rounded-md">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordTouched(true)}
                className={`w-full p-2 border-none bg-[#12141c4a] ${passwordStyle}`}
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="text-white cursor-pointer mr-2"
              >
                {passwordVisible ? (
                  <IconKey size={24} />
                ) : (
                  <IconKeyOff size={24} />
                )}
              </span>
            </div>
            {passwordTouched && !validatePassword(password) && (
              <p className="text-red-500 text-xs mt-1">
                La contraseña debe tener mínimo 8 caracteres.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-bold py-2 px-4 transition-all rounded-full text-gray-100 uppercase tracking-wide shadow-md ${
              !isFormValid
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white"
            }`}
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </>
  );
};
