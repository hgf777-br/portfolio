/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';
import propToStyle from '../../../theme/utils/propToStyle';
import Grid from '../../layout/Grid';
// import imagem from '../../../../public/images/site1.png';

const CardBase = styled.div`
  // width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 400px;
  border: 2px solid;
  margin: 20px 0px;
  border-color: ${({ theme }) => theme.colors.primary.main.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background.main.color};
`;

const CardImage = styled.div`
  height: 100%;
  width: 100%;
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;

const CardText = styled.div`
  padding: 2px;
  height: 50px;
`;

const CardTitle = styled.div`
  padding: 2px;
  height: 50px;
`;

function CardDestaque({
  title, url, image, text, ...props
}) {
  return (
    <CardBase>
      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 8 }}
        >
          <CardImage {...props} />
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 4 }}
        >
          <CardTitle>
            <Text
              variant="subTitle"
              tag="h2"
              color="tertiary.main"
            >
              {title}
            </Text>
          </CardTitle>
          <CardText>
            <Text
              variant="paragraph1"
              tag="h2"
              color="tertiary.main"
            >
              Site desenvolvido no Bootcamp JAM STACK da Alura.
              Utilizamos React, Next e muitas outras Tecnologias de ponta.
            </Text>
          </CardText>
        </Grid.Col>
      </Grid.Row>
    </CardBase>
  );
}

CardDestaque.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardDestaque;
