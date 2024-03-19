import styled from 'styled-components';

const H5 = styled.h5`
  color: #F5F5F5;
  font-size: 16px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;

const P = styled.p`
  color: #DCDCDC;
  font-size: 10.24px;
  font-family: Inter;
  font-weight: 400;
  line-height: 15.36px;
  word-wrap: break-word;
  margin-bottom: 15px;
`;

export default function Bio() {
  return <>
    <H5>About</H5>
    <P>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</P>

    <H5>Interests</H5>
    <P>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</P>
  </>
}
