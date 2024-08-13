import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const PORT = process.env.PORT || 3001;
let define;
// https://vitejs.dev/config/
///if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {

    define = {
      plugins: [react()],
      //One for prod one local
      // define:{
      //   global: "window",
      // },
      server: {
        port: PORT,
        open: true,
        proxy: {
          "/graphql": {
            target: `https://tweeter-tkk8.onrender.com/:${PORT}`,
            secure: false,
            changeOrigin: true,
          },
        },
      },
    }
  

  export default defineConfig(define);

