/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;


  border: 2px solid #233129;
  color: #666360;

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    // eslint-disable-next-line prettier/prettier
    props.isErrored && css`
      border-color: #c53030;
    `}
  ${(props) =>
    // eslint-disable-next-line prettier/prettier
    props.isFocused && css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    // eslint-disable-next-line prettier/prettier
    props.isFilled && css`
      color: #ff9000;
    `}


  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      background: #c53030 transparent;
    }
  }
`;
