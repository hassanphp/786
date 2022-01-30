import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonCss } from "./styles/ButtonCss";

const SidebarNav = styled.nav`
  height: calc(100vh - 0px);
  max-height: calc(100vh - 0px);
  background-color: rgb(253, 253, 252);
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 1px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  margin: 0px;
  padding: 0px;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const SideNav = () => {
  const [sidebar, setsidebar] = useState(true);

  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <ButtonCss width="90%"> Create Channel</ButtonCss>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default SideNav;
