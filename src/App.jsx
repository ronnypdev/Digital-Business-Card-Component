import styled from 'styled-components';

import Card from './components/card/Card';
import FeaturedImage from "./components/card/FeaturedImage";
import Info from "./components/card/Info";
import Button from './components/card/Button';
import Bio from './components/card/Bio';
import SocialMedia from './components/card/SocialMedia';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardBody = styled.main`
  padding: 20px;
`

export default function App() {

  return (
    <Wrapper>
      <Card>
        <FeaturedImage />
        <CardBody>
          <Info />
          <Button />
          <Bio />
        </CardBody>
      </Card>
    </Wrapper>
  )
}


