import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 20px 0;
`;

const PrimaryButton = styled.button`
  border: none;
  background-color: hsla(212, 72%, 60%, 1);
  color: hsla(0, 0%, 100%, 1);
  display: inline-block;
  padding: 9px 13px 9px 11px;
  color: white;
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 16px;
  word-wrap: break-word;
  border-radius: 6px;
  width: 100%;
`

export default function Button(props) {

  const { bunttonText } = props;

  return <>
    <ButtonWrapper>
      <PrimaryButton>LinkedIn</PrimaryButton>
    </ButtonWrapper>
  </>
}
