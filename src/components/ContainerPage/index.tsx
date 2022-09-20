import React from "react";
import { HeaderContentStyled, HeaderStyled, TitleStyled } from "./styles";
import styled from "styled-components";

export const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <TitleStyled>Discord</TitleStyled>
        <button>that is a HeaderStyled</button>
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
