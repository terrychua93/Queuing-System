import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout/Layout'; // Import your page components
import LoadingScreen from './components/LoadingScreen/loadingScreen';
import { Button, ChakraProvider, extendBaseTheme } from '@chakra-ui/react';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
]);

const theme = extendBaseTheme({
  components: {
    Button,
  },
})

const App = () => {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Simulating loading process for 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <ChakraProvider>
      {isLoading ? (<LoadingScreen isLoading={isLoading} />) : (<RouterProvider router={router} />)}
    </ChakraProvider>
  );
};

export default App;
