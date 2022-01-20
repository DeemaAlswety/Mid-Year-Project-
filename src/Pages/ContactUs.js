import react from "react";
import { Container, Row, Col } from "react-bootstrap";
function ContactUs() {
  return (
    <Container>
      <h3>ContactUs</h3>
      {/* create a form using react-bootstrap */}
      <Row>
        <Col>
          <label
            htmlFor="name"
            style={{
              float: "left",
            }}
          >
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </Col>
        <Col>
          <label
            htmlFor="email"
            style={{
              float: "left",
            }}
          >
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
        </Col>
      </Row>
      <br />
      <label
        for="message"
        style={{
          float: "left",
        }}
      >
        Message
      </label>
      <textarea class="form-control" id="message" rows="3"></textarea>
      <br />
      <button
        className="btn btn-primary"
        style={{
          float: "left",
        }}
      >
        Send
      </button>
    </Container>
  );
}
export default ContactUs;
