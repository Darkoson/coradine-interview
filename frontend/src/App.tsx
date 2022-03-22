
import styled from "styled-components";
import AppRoutes from "./AppRoutes";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
}

export default App;
