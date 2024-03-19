import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
`;

const H2 = styled.h2`
  color: white;
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  word-wrap: break-word;
`;

const H4 = styled.h4`
  color: #F3BF99;
  font-size: 12.80px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 5px;
`;

const H6 = styled.h6`
  color: #F5F5F5;
  font-size: 10.24px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 15.36px;
  word-wrap: break-word;
`;

export default function Info() {
  return <>
    <Header>
      <H2>Laura Smith</H2>
      <H4>Frontend Developer</H4>
      <H6>laurasmith.website</H6>
    </Header>
  </>
}
