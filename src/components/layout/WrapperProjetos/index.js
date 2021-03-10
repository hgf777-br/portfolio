import React from 'react';
import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Card from '../../commons/Card';
import CardDestaque from '../../commons/CardDestaque';
// import Button from '../../commons/Button';
// import { Text } from '../../foundation/Text';
import Grid from '../Grid';

const WrapperProjetosBase = styled.div`
  ${propToStyle('flex')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexWrap')}
`;

function WrapperProjetos() {
  return (
    <WrapperProjetosBase>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 12 }}
          >
            <CardDestaque
              title="#Sal"
              url="https://www.inovegrafica.com.br/sal/ranking.php"
              backgroundImage="url(/images/site4.png)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
          >
            <Card
              title="Sailflix"
              url="https://sailflix.hgf777-br.vercel.app/"
              backgroundImage="url(/images/site1.png)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
          >
            <Card
              title="FF7R Quiz"
              url="https://ff7quiz.hgf777-br.vercel.app/"
              backgroundImage="url(/images/site2.png)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
            />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
          >
            <Card
              title="Calculadora"
              url="https://graficainove.com.br/calculator/"
              backgroundImage="url(/images/site3.png)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </WrapperProjetosBase>
  );
}

export default WrapperProjetos;
