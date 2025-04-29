const CreateAccountForm = () => (
    <>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-full transition mb-2">
        Crear cuenta
      </button>
  
      <p className="text-xs text-gray-500 mb-8">
        Al registrarte, aceptas los <a href="#" className="text-blue-500 hover:underline">Términos de servicio</a> y la <a href="#" className="text-blue-500 hover:underline">Política de privacidad</a>, incluida la política de Uso de Cookies.
      </p>
  
      <p className="font-bold mb-2">¿Ya tienes una cuenta?</p>
      <button className="w-full border border-gray-300 text-blue-500 font-bold py-2 rounded-full hover:bg-gray-100 transition">
        Iniciar sesión
      </button>
    </>
  );
  
  export default CreateAccountForm;
  