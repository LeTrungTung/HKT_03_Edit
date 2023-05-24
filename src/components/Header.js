import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Container id="id-top">
      <Navbar
        expand="lg"
        variant="light"
        // bg="light"
        className="cl-header"
      >
        <div className="area-left">
          <Navbar.Brand href="#" className="detail-left">
            <p>Players:</p>
            <p>{props.playerQuantity()}</p>
          </Navbar.Brand>
          <Navbar.Brand href="#" className="detail-left">
            <p>Total Points:</p>
            <p>{props.totalMark()}</p>
          </Navbar.Brand>
        </div>

        <div className="area-right">
          <Navbar.Brand href="#">
            {" "}
            <h1>Bảng điểm</h1>
          </Navbar.Brand>
        </div>
      </Navbar>
    </Container>
  );
}

export default Header;
