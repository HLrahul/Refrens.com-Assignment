import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/color-mode";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import './index.css'
import theme from './theme.ts'

import App from './App.tsx'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
