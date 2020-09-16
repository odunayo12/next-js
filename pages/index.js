// import styles from "../styles/Home.module.css";
import fetch from "isomorphic-fetch";

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

export default Home = ({ movies }) => {
  console.log(movies);
  return (
    <div className="container">
      <h1>This is the starting page</h1>
    </div>
  );
};
