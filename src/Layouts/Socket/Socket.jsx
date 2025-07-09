import { io } from "socket.io-client";

// Solo se ejecuta UNA VEZ al importar este archivo.
export const socket = io('http://localhost:10101', {
  // Opcional: Si quieres reconexiones automáticas.
  reconnection: true,
  reconnectionAttempts: 5,
  transports: ["websocket"], // Recomendado para evitar fallback a long-polling
});
