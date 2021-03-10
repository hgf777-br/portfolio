import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

const titleXL = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXL.fontSize};
    font-weight: ${theme.typographyVariants.titleXL.fontWeight};
    line-height: ${theme.typographyVariants.titleXL.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
  `}
`;

const subtitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subtitle.fontSize};
    font-weight: ${theme.typographyVariants.subtitle.fontWeight};
    line-height: ${theme.typographyVariants.subtitle.lineHeight};
  `}
`;

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const paragraph2 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${theme.typographyVariants.paragraph2.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  titleXL,
  title,
  subtitle,
  paragraph1,
  paragraph2,
  smallestException,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]};
  ${propToStyle('textAlign')};  
  ${propToStyle('paddingTop')};
  ${propToStyle('backgroundColor')};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;

export function Text({
  variant,
  children,
  tag,
  ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['titleXL', 'title', 'subtitle', 'paragraph1', 'paragraph2', 'smallestException']),
};
