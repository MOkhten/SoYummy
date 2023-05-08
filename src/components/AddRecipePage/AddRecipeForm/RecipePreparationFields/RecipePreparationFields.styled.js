import styled from '@emotion/styled';
import { Field } from 'formik';

export const PreparationFieldSet = styled.fieldset`
  border: 0;
  z-index: 80;
`;

export const PreparationHeading = styled.h2`
  margin-bottom: 24px;
  line-height: 1;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.fontColorDark};
  @media ${props => props.theme.media.tablet} {
    margin-bottom: 32px;
    margin-top: 0;
  }
  @media ${props => props.theme.media.desktop} {
    margin-bottom: 32px;
    margin-top: 0;
  }
`;

export const PreparationTextArea = styled(Field)`
  width: 343px;
  height: 154px;
  resize: none;
  padding: 10px 16px;

  outline: none;
  background-color: ${props =>
    props.theme.colors.addRecipeFormFieldsBackground};
  border: ${props => props.theme.colors.addRecipeFormFieldsBorder};
  border-radius: 6px;
  margin-bottom: 18px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.colorInput};
  @media ${props => props.theme.media.tablet} {
    width: 343px;
    height: 154px;
    padding: 16px 22px;
    margin-bottom: 32px;
  }
  @media ${props => props.theme.media.desktop} {
    width: 505px;
    height: 224px;
    padding: 16px 22px;
    margin-bottom: 32px;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 1.5;
    color: ${props => props.theme.colors.placeHolderColor};
  }
  :-ms-input-placeholder {
    font-size: 14px;
    line-height: 1.5;
    color: ${props => props.theme.colors.placeHolderColor};
  }
`;
export const EmptyFieldNotation = styled.span`
  font-size: 24px;
  color: red;
  position: absolute;
`;
