// import styles from "../styles/Home.module.css";
import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import { Flex, Box } from "reflexbox";
import theme from "../theme/theme";

export async function getServerSideProps(context) {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/movies`);
  const data = await res.json();

  return {
    props: {
      movies: data,
    },
  };
}

const Home = ({ movies }) => {
  //console.log(movies);
  return (
    // bg={['red', "green", "blue", 'yellow']} is background color according tó breakpoints defined in theme.js
    // bg={{ _: "red", lg: "black" }} implies 0 to large screen size takes red and black afterwards
    <Box variant="container" bg={{ _: "black" }}>
      {/* the title below is wrapped in a box with top and bottom margins of 40px as an h2 tag */}
      <Box my={40} as="h2" color="white" textAlign="center">
        Latest Movies
      </Box>
      <Flex
        justifyContent="space-between"
        // {/* between 0 amd md (medium-sized screen) take colums, else rows. */}
        flexDirection={{ _: "column", md: "row" }}>
        {/* <h1>This is the starting page</h1> */}
        {/* the cards take 100% on screen sizes lesser than medium and 30% otherwise */}
        {movies.map((movie) => (
          <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
