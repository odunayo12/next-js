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
  console.log(movies);
  return (
    // bg={['red', "green", "blue", 'yellow']} is background color according tó breakpoints defined in theme.js
    <Box variant="container" bg={{ _: "red", lg: "black" }}>
      <h2>Latest Movies</h2>
      <Flex justifyContent="space-between">
        {/* <h1>This is the starting page</h1> */}
        {movies.map((movie) => (
          <Box key={movie.id} width="30%">
            <Card movie={movie} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Home;
