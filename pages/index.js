import React from 'react';
import Footer from '../src/components/commons/Footer';
import Cabecalho from '../src/components/layout/Cabecalho';
// import { Text } from '../src/components/foundation/Text';
// import Button from '../src/components/commons/Button';
// import Grid from '../src/components/layout/Grid';
import Box from '../src/components/layout/Box';
import Capa from '../src/components/layout/Capa';
import WrapperProjetos from '../src/components/layout/WrapperProjetos';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Capa
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
        backgroundImage="url(/images/fundo_capa.png)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      />

      <Cabecalho />

      <WrapperProjetos
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"
      />

      <Footer />

    </Box>
  );
}
