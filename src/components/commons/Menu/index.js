import React from 'react';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import { Text } from '../../foundation/Text';
import MenuWrapper from './styles/MenuWrapper';

const links = [
  { url: '/', name: 'Home' },
  { url: '/faq', name: 'Perguntas Frequentes' },
  { url: '/sobre', name: 'Sobre' },
];

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {' '}
        {/* MenuWrapper.CentralSide */}
        {links.map((link) => (
          <li key={link.url}>
            <Text tag="a" variant="smallestException" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        {' '}
        {/* MenuWrapper.RightSide */}
        <Button ghost variant="secondary.main">
          Entrar
        </Button>
        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
