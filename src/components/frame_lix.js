import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ImageEducation() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="log_lix.webp/100px250" roundedCircle />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageEducation; 