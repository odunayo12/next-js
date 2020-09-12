import styled from "@emotion/styled";
import { rem } from "polished";

// we define our props in the header fxtn and send it to the css so the css has access to it and we can edit it sutably from there
const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="container">
        <div className="logo"></div>
        <img src="vercel.svg" alt="Site Logo" />
        <span className=""></span>
        <span className="logo-text">Next Web</span>
      </div>
      Now I am a real Header!
    </HeaderStyled>
  );
};

//header below can be div span ... whatever the root tag in our fuction above is
const HeaderStyled = styled.header`
  ${"" /* background: #efefef; */}
  ${"" /* same as below */}
  /* background: ${(props) =>
    props.theme.colors.primary}; */
  background: ${(props) =>
    props.isDark ? "#000000" : "#efefef"};
  padding: 20px;
  .logo {
    /* logo is a div className under Header therefore we can indent it here */
    display: flex;
    align-items: center;
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
