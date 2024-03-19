import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #1A1B21;
  width: 317px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function Card(props) {
  return <>
    <CardWrapper>{props.children}</CardWrapper>
  </>

}
