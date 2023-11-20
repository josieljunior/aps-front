import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import lixeiras from '../images/Lixeiras.png';

function ImageEducation() {
  return (
    <Container>
      <Image src={lixeiras} fluid />
    </Container>
  );
}

export default ImageEducation;