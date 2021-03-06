import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Navigation from "components/Navigation";
import Link from "next/link";

// we define our props in the header fxtn and send it to the css so the css has access to it and we can edit it sutably from there
const Header = ({ isDark, navigation }) => {
  return (
    <HeaderStyled isDark={isDark}>
      {/* vaiant is to box what className is to a Component such as div */}
      <Box variant="container">
        <Flex justifyContent="space-between" alignItems="center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="download_1.svg" alt="Site Logo" />
                <span className="logo-text">Next Web</span>
              </a>
            </Link>
          </div>

          <Navigation navigation={navigation} />
        </Flex>
      </Box>
      {/* Now I am a real Header! */}
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
    a {
      /* logo is a div className under Header therefore we can indent it here */
      display: flex;
      align-items: center;
      /* background: whitesmoke; */
      text-decoration: none;
    }
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
