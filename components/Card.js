import styled from "@emotion/styled";
// note that {movie } is a destructure prop, if we had used something like (prop) we would have only access object values through some thin like {prop.movie.title} instead of {movie.title}
const Card = ({ movie }) => {
  const { API_URL } = process.env;

  return (
    <CardStyled>
      <div className="poster">
        <img src={API_URL + movie.poster.url} alt="Image-advert"></img>
      </div>
      <div className="body">
        <h3>{movie.title}</h3>
        {/* in case of wrongly formated html, the following forces it to conform */}
        <p dangerouslySetInnerHTML={{ __html: movie.description }}></p>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .body {
    padding: 20px;
    h3 {
      margin-bottom: 20px;
    }
    p {
      color: #666666;
      line-height: 1.5;
    }
  }
`;
export default Card;
