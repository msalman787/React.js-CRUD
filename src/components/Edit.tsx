import React, { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Students from "./Students";

function Edit() {
  const [name, setname]: any = useState("");
  const [roll_no, setroll_no]: any = useState("");
  const [city, setcity]: any = useState("");
  const [id, setId]: any = useState("");
  const [DisableBtn, setDisableBtn] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (name && roll_no && city) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [name, roll_no, city]);

  let index = Students.map((item: any) => {
    return item.id;
  }).indexOf(id);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setroll_no(localStorage.getItem("roll_no"));
    setcity(localStorage.getItem("city"));
  }, []);

  const HandleEdit = (e: any) => {
    e.preventDefault();

    let a = Students[index];
    a.name = name;
    a.roll_no = roll_no;
    a.city = city;

    navigate("/");
  };

  return (
    <div>
      <Form style={{ margin: "10rem" }}>
        <h2 style={{ marginTop: "5rem" }}>Edit Student</h2>
        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e: any) => {
              setname(e.target.value);
            }}
            placeholder="Enter Student Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>Roll No Name</Form.Label>
          <Form.Control
            value={roll_no}
            type="number"
            onChange={(e: any) => {
              setroll_no(e.target.value);
            }}
            placeholder="Enter Roll No"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
            value={city}
            onChange={(e: any) => {
              setcity(e.target.value);
            }}
            placeholder="Enter City Name"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="mx-3"
          type="submit"
          disabled={DisableBtn}
          onClick={(e: any) => {
            HandleEdit(e);
          }}
        >
          Update
        </Button>
        <Button
          variant="secondary"
          type="submit"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
