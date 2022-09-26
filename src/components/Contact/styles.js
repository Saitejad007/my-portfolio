import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000000;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    height: auto;
    padding: 3rem 0;
  }
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 80%;
  max-width: 500px;
  max-height: 500px;
`;

export const Title = styled.h1`
  font-family: inherit;
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 16px;
  padding-bottom: 0;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  background: #ffffff;
  text-transform: uppercase;
  border: 2px solid #171717;
  font-weight: 700;
  font-family: "Roboto";
  cursor: pointer;
  margin: 10px 0;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #00dfc4;
    background: #171717;
    border: 2px solid #00dfc4;
    font-weight: 500;
    letter-spacing: 4px;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 6px 2px -3px rgba(0, 244, 220, 0.76);
  }
`;

export const ImageContainer = styled(Container)`
  margin: 0 2rem;
  max-height: 500px;
  width: 80%;
  max-width: 500px;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Animator = styled.iframe`
  // width: 900px;
  // max-width: 100%;
  // height: 80%;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`;

export const ButtonIcon = styled.a`
  background: none;
  width: 30%;
  border: 1px solid #fff;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 1.25rem;
  transition: 0.5s;
  @media screen and (max-width: 768px) {
    padding: 0.4rem 0rem;
    width: auto;
  }
  span {
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: 0.4s;
    @media screen and (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.75rem;
    }
  }
  &:hover {
    background: #0a66c2;
    transition: 0.5s;
    padding: 0.5rem 1.25rem;
    box-shadow: 0px 7px 2px -3px rgba(10, 102, 194, 0.76);
    @media screen and (max-width: 768px) {
      padding: 0.4rem 0.2rem;
    }
    span {
      font-size: 1.1rem;
      transition: 0.4s;
      @media screen and (max-width: 768px) {
        font-size: 0.85rem;
      }
    }
  }
`;

export const GmailButton = styled(ButtonIcon)`
  &:hover {
    background: #ea4335;
    box-shadow: 0px 7px 2px -3px rgba(234, 67, 53, 0.76);
  }
`;

export const GithubButton = styled(ButtonIcon)`
  &:hover {
    background: #fff;
    color: #000;
    box-shadow: 0px 6px 2px -3px rgba(255, 255, 255, 0.76);
  }
`;
