import { useContext } from "react";
import { ContextGlobal } from "../../contexts/contextGlobal";

import { Container } from "./styles";

export const Table = () => {
  const { students } = useContext(ContextGlobal);
  
  return (
    <Container>
        <div className="table-wrapper">
          <table className="fl-table">
            <thead>
              <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Participation</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => {
                return (
                  <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.participation}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    </Container>
  );
};