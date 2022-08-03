import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { HeaderContainer, Form, Input, Button } from "./styles";

export const Header = () => {
  const { form, onChange, addStudents } = useContext(ContextGlobal);

  return (
    <HeaderContainer>
      <Form>
        <Input type="text" placeholder="First name"
          name="firstName"
          value={form?.firstName}
          onChange={onChange}
          required
        />
        <Input type="text" placeholder="Last name"
          name="lastName"
          value={form?.lastName}
          onChange={onChange}
          required
        />
        <Input type="text" placeholder="Participation" 
          name="participation"
          value={form?.participation}
          onChange={onChange}
          required
        />
        <Button type="submit" onClick={(e) => addStudents(e)}>SEND</Button>
      </Form>
    </HeaderContainer>
  );
};