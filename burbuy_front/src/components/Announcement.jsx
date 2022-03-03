import styled from "styled-components";
// import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { AddShoppingCartSharp } from "@material-ui/icons";

import { Jumper } from "./animate";

const Announcement = () => {
  return (
    <Container>
      <AddShoppingCartSharp />
      <Jumper />
    </Container>
  );
};

export default Announcement;

const Container = styled.div`
  height: 30px;
  background-color: #d47f2f;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
