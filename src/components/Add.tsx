import React, { Fragment, useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Students from "./Students";

function Add() {
  const [name, setname] = useState("");
  const [roll_no, setroll_no]: any = useState("");
  const [city, setcity] = useState("");
  const [DisableBtn, setDisableBtn] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (name && roll_no && city) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [name, roll_no, city]);

  const HandleSubmit = (e: any) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = roll_no,
      c = city;

    Students.push({ id: uniqueId, name: a, roll_no: b, city: c });

    navigate("/");
  };

  return (
    <div>
      <Form style={{ margin: "10rem" }}>
        <h2 style={{ marginTop: "5rem" }}>Add New Student</h2>
        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e: any) => {
              setname(e.target.value);
            }}
            placeholder="Enter Student Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>Roll No Name</Form.Label>
          <Form.Control
            type="number"
            onChange={(e: any) => {
              setroll_no(e.target.value);
            }}
            placeholder="Enter Roll no"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName" aria-required>
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="text"
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
            HandleSubmit(e);
          }}
        >
          Submit
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

export default Add;
