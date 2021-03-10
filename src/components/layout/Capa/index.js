import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
// import Button from '../../commons/Button';
import { Text } from '../../foundation/Text';
import Grid from '../Grid';

const BaseCapa = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
`;

function Capa({ ...props }) {
  return (
    <BaseCapa
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 12 }}
          >
            <Text
              variant="titleXL"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              paddingTop="100px"
            >
              Portfólio
            </Text>
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Henrique Faria
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </BaseCapa>
  );
}

export default Capa;
