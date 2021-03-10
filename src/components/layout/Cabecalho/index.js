import React from 'react';
import Logo from '../../../theme/Logo';
import Button from '../../commons/Button';
// import { Text } from '../../foundation/Text';
import MenuWrapper from '../../commons/Menu/styles/MenuWrapper';

// const links = [
//   { url: '/', name: 'Home' },
//   { url: '/faq', name: 'Perguntas Frequentes' },
//   { url: '/sobre', name: 'Sobre' },
// ];

export default function Cabecalho() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.RightSide>
        <Button
          variant="primary.main"
          margin="0px 10px"
        >
          Sobre mim
        </Button>
        <Button
          variant="primary.main"
          margin="0px 10px"
        >
          Contato
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
