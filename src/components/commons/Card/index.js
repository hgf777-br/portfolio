/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
// import imagem from '../../../../public/images/site1.png';

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  margin: 8px 0px;
  justify-content: space-space-evenly;
  // width: 300px;
  height: 400px;
  border: 2px solid;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  border-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const CardImage = styled.div`
  height: 85%;
  width: 100%;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;

const CardTitle = styled.div`
  height: 15%;
`;

function Card({
  title, url, image, ...props
}) {
  return (
    <CardBase {...props}>
      <CardImage {...props} />
      <CardTitle>
        <Text
          variant="subTitle"
          tag="h2"
          color="tertiary.main"
        >
          {title}
        </Text>
      </CardTitle>
    </CardBase>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
