const links = [
    "Información", "Descarga la app de X", "Grok", "Centro de Ayuda",
    "Condiciones de Servicio", "Política de Privacidad", "Política de cookies",
    "Accesibilidad", "Información de anuncios", "Blog", "Empleos",
    "X para empresas", "Desarrolladores", "Guía", "Configuración"
  ];
  
  const Footer = () => (
    <footer className="text-center text-xs text-gray-500 p-4 border-t border-gray-200 flex flex-wrap justify-center gap-2">
      {links.map((link, i) => (
        <a key={i} href="#" className="hover:underline">{link}</a>
      ))}
      <span>© 2025 X Corp.</span>
    </footer>
  );
  
  export default Footer;
  