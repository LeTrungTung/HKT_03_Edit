import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function FormAddPlayer({ onPlayerSubmit }) {
  const [playerName, setPlayerName] = useState("");
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Truyền dữ liệu cho app
    onPlayerSubmit(formData);
    // setPlayerName("");
    //   Xóa dữ liệu trong form
    setFormData({});
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Form id="id-footer" onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Id công việc"
            name="id"
            id="id"
            hidden
          />
          <Form.Control
            placeholder="Điểm số"
            name="mark"
            id="mark"
            type="number"
            min={0}
            value={formData?.mark}
            hidden
            onChange={handleOnChange}
          />

          <Form.Control
            placeholder="Enter a player's name"
            // aria-label="Player-name"
            // aria-describedby="basic-addon2"
            type="text"
            name="name"
            // value={formData?.name}
            onChange={handleOnChange}
            // onChange={(e) => setPlayerName(e.target.value)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            style={{ color: "white" }}
          >
            ADD PLAYER
          </Button>
        </InputGroup>
      </Form>
    </>
  );
}

export default FormAddPlayer;
