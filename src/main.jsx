import * as React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <div className=" max-w-[95%] mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </AuthProvider>
);
