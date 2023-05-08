import styled from '@emotion/styled';
import { Icon } from 'components/Icon';
import { IconPerson } from './ModalUserProfil/ModalUserProfil.styled';

export const UserLogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
export const AvatarUser = styled(IconPerson)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  stroke: #c4c4c4;
`;
export const UserNameP = styled.p`
  margin-left: 14px;

  font-weight: 600;
  font-size: 12px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.fontColorNameUser};
  @media ${props => props.theme.media.tablet} {
    font-size: 14px;
  }
  @media ${props => props.theme.media.desktop} {
    font-size: 14px;
  }
`;
export const WrapperImg = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid grey;
  border-radius: 50%;
  overflow: hidden;
  @media ${props => props.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  @media ${props => props.theme.media.desktop} {
    width: 44px;
    height: 44px;
  }
`;
export const UserAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const UserIcon = styled(Icon)`
  width: 100%;
  height: 100%;
  stroke: #c4c4c4;
  object-fit: cover;
`;

export const BurgerMuneBtn = styled.button`
  width: 28px;
  height: 28px;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  text-align: center;
  margin-left: 24px;

  @media ${props => props.theme.media.tablet} {
    margin-left: 54px;
  }
  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;

export const BurgerMenuIcon = styled(Icon)`
  width: 28px;
  height: 28px;
  stroke: ${props => props.theme.colors.primary};
  border: none;
  cursor: pointer;

  &:hover {
    stroke: ${({ theme }) => theme.colors.primary};
  }
`;
