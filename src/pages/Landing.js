import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Phone <span>book</span> App
          </h1>
          <p>
            Hub envisions a world where connecting with local businesses and individuals is effortless and accessible to everyone. We aim to create the premier phone book app, revitalizing the concept for the digital age by offering a user-friendly platform that fosters a sense of community and empowers local connections.
          </p>
          <Link to="/register" className="btn hero-btn">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -5rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .main-img {
      display: block;
    }
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
  }
`;

export default Landing;
