import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { flexBox } from 'styles/mixins';
import { Icon } from 'components/Icon';

export const HeaderLogoStyled = styled(Link)`
  ${flexBox};
`;
export const HeaderLogoIcon = styled(Icon)`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 10px;
  stroke: #fafafa;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.primary};

  @media ${props => props.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  &:hover {
    stroke: ${props => props.theme.colors.primary};
    background-color: #ebf3d4;
  }
`;
export const HeaderLogoDiv = styled.div``;
