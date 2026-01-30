import styled from "styled-components";
import cloud from "../assets/cloud.svg";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 2.5rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
`;

const Card = styled.div`
  width: 25%;
  text-align: center;

  &:nth-child(2) {
    margin-top: 5rem;
  }

  &:nth-child(3) {
    margin-top: 10rem;
  }

  @media (max-width: 1024px) {
    width: 45%;

    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 3rem;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-top: 2rem;

    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 2rem;
    }
  }
`;

const Image = styled.img`
  height: 5rem;
  width: 5rem;

  @media (max-width: 640px) {
    height: 4rem;
    width: 4rem;
  }
`;

const Heading = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1rem;

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

const Paragraph = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 1rem;
  line-height: 1.6;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const HomePart3 = () => {
  return (
    <Container>
      <Card>
        <Image src={cloud} alt="Cloud" />
        <Heading>Lorem ipsum dolor sit amet.</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </Paragraph>
      </Card>

      <Card>
        <Image src={cloud} alt="Cloud" />
        <Heading>Lorem ipsum dolor sit amet.</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </Paragraph>
      </Card>

      <Card>
        <Image src={cloud} alt="Cloud" />
        <Heading>Lorem ipsum dolor sit amet.</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </Paragraph>
      </Card>
    </Container>
  );
};
