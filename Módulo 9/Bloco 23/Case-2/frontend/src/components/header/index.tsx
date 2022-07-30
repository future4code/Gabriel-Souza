import { HeaderContainer, Form, Input, Button } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Form>
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="text" placeholder="Participation" />
        <Button type="submit">SEND</Button>
      </Form>
    </HeaderContainer>
  );
};