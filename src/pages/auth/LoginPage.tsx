import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@stores/index";

export const LoginPage = () => {
  const navigate = useNavigate();

  const loginUser = useAuthStore((state) => state.loginUser);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const { username, password, remember } = event.target as HTMLFormElement;
    const { email, password } =
      event.target as typeof event.target & {
        email: { value: string };
        password: { value: string };
      };

    console.log(email.value, password.value);

    try {
      await loginUser(email.value, password.value);
      navigate("/dashboard");
    } catch (error) {
      console.log("no se pudo autenticar");
    }
  };

  return (
    <>
      <div className="w-full mx-auto px-8  flex-col items-center space-y-6">
        <h1 className="text-2xl font-semibold mb-4">Iniciar Sesión</h1>
        <p className="text-sm font-regular text-gray-600 mb-4">
          !Hola de nuevo!
        </p>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Constraseña"
              autoComplete="off"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

