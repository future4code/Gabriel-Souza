import { Outlet } from "react-router-dom";

import { Container } from "./styles";

interface OutletsProps {
  id: string;
};

export const Outlets = ({ id }: OutletsProps) => {
  return (
    <Container id={id}>
      <Outlet />
    </Container>
  );
};