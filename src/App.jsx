import styled from 'styled-components';

import Card from './components/card/Card';
import FeaturedImage from "./components/card/FeaturedImage";
import Info from "./components/card/Info";
import Button from './components/card/Button';
import Bio from './components/card/Bio';
import SocilaMedia from './components/card/SocilaMedia';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function App() {

  return (
    <Wrapper>
      <Card>
        <FeaturedImage />
        <Info />
        <Button />
        <Bio />
        <SocilaMedia />
      </Card>
    </Wrapper>
  )
}


