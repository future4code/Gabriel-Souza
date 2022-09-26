import styled from "styled-components";

export const Ul_Styles = styled.ul`
  .pagination {
    display: flex;
    flex-direction: row;
    color: #3b36d1;
    list-style-type: none;
    padding: 10px;

    > li div {

      height: 30;
      margin-top: -25px;
     
    }

    > li {
      border-radius: 10px;
      a {
        margin: 0.5rem;
        cursor: pointer;
      }
    }
  }

  .break-me {
    cursor: default;
  }

  .active {
    border-color: transparent;
    font-weight: bold;
    color: #5c16c5;
  }
`