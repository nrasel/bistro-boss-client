import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className=" max-w-[95%] mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
