import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navigation from "../components/navigation/Navigation";

const SecuredPagesContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SecuredPagesContent = styled.div`
  width: 95%;
`;

const SecuredPages = () => (
  <SecuredPagesContainer>
    <Navigation />
    <SecuredPagesContent>
      <Outlet />
    </SecuredPagesContent>
  </SecuredPagesContainer>
);

export default SecuredPages;
