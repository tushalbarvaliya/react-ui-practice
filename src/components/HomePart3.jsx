import styled from "styled-components";
import cloud from "../assets/cloud.svg";

const Container = styled.div`
  display: flex;
  margin: 1rem 2.5rem;  // mx-10 my-4
  justify-content: space-around;
`;

const Card = styled.div`
  margin: 0 1rem;         // mx-4
  width: 25%;             // w-3/12
  text-align: center;
`;

const Image = styled.img`
  height: 5rem;           // h-20
  width: 5rem;            // w-20
`;

const Heading = styled.h3`
  color: white;
  font-size: 1.25rem;     // text-xl
  font-weight: bold;      // font-bold
  margin-top: 1rem;       // mt-4
`;

const Paragraph = styled.p`
  color: #9ca3af;         // text-gray-400
  font-size: 0.875rem;    // text-sm
  font-weight: 600;       // font-semibold
  margin-top: 1rem;       // mt-4
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
      <Card style={{ marginTop: "5rem" }}>
        <Image src={cloud} alt="Cloud" />
        <Heading>Lorem ipsum dolor sit amet.</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </Paragraph>
      </Card>
      <Card style={{ marginTop: "10rem" }}>
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
