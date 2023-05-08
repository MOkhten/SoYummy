import styled from '@emotion/styled';
import bgImgS from 'images/headerImges/burger-bg-s.png';
import bgImgM from 'images/headerImges/burger-bg-m.png';
import { flexBox } from 'styles/mixins';
import { Icon } from 'components/Icon';

export const BurgerMenuDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 90;
  background: ${({ theme }) => theme.colors.bgBurger} url(${bgImgS}) no-repeat
    right bottom;

  @media ${props => props.theme.media.tablet} {
    background: ${({ theme }) => theme.colors.bgBurger} url(${bgImgM}) no-repeat
      right bottom;
  }
  @media ${props => props.theme.media.desktop} {
    background: transparent;
  }
`;
export const ModalDiv = styled.div`
  padding: 18px 16px;
  max-width: 100%;
  position: relative;
`;

export const HeaderLogoDiv = styled.div`
  ${flexBox};
  justify-content: space-between;
  align-items: center;
`;
export const BtnCloseModal = styled.button`
  display: block;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
export const CloseIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  background-color: transparent;
  stroke: ${({ theme }) => theme.colors.fontColorNavigation};
  &:hover {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
export const SearchIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  stroke: ${({ theme }) => theme.colors.fontColorNavigation};
  background-color: transparent;
  &:hover {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
export const BurgerNavigationNav = styled.nav`
  display: none;
  ${flexBox};
  flex-direction: column;
  row-gap: 32px;

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;
