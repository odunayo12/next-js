import styled from "@emotion/styled";
import Link from "next/link";
// to handle routes
import { useRouter } from "next/router";

const Navigation = ({ navigation }) => {
  const router = useRouter();
  //console.log(router);
  return (
    <NavigationStyled>
      <ul>
        {navigation.map((each_item) => (
          <li key={each_item.id}>
            <Link href={each_item.slug}>
              {/* note 'active' is a css class see below */}
              <a className={router.pathname === each_item.slug ? "active" : ""}>
                {each_item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-left: 10px;
    }

    a {
      text-decoration: none;
      color: "#4C9EE3";

      &:hover {
        text-decoration: underline;
      }

      &.active {
        color: #ef6800;
      }
    }
  }
`;

export default Navigation;
