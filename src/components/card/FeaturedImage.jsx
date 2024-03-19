import styled from 'styled-components';
import ProfileImage from '../../assets/profile_pic.png';


const MediaWrapper = styled.div`
  width: 100%;
`;

const Media = styled.img`
  width: 100%;
  height: 100%;
`;

export default function FeaturedImage() {
  return (
    <MediaWrapper>
      <Media src={ProfileImage} alt="Profile Image" />
    </MediaWrapper>
  )
}
