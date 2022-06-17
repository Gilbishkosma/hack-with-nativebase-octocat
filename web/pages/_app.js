import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

// extend the theme
const customTheme = extendTheme({ config });

function ClientOnly({ children }) {
  // earlier i was getting some responsiveness related issue
  // Issue and Solution here: https://github.com/GeekyAnts/NativeBase/issues/3997
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
}

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider theme={customTheme}>
      <ClientOnly>
        <Component {...pageProps} />
      </ClientOnly>
    </NativeBaseProvider>
  );
}

export default MyApp;
