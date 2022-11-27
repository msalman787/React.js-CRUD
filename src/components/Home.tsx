import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Students from "./Students";

function Home() {
  let navigate = useNavigate();

  const HandleEdit = (
    id: string,
    StudentName: string,
    roll_no: string,
    city: string
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", StudentName);
    localStorage.setItem("roll_no", roll_no);
    localStorage.setItem("city", city);
  };

  const HandleDelete = (id: number) => {
    let index = Students.map((item: any) => {
      return item.id;
    }).indexOf(id);

    Students.splice(index, 1);

    navigate("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <h2 className="mb-3"> CRUD Application</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student Name</th>
              <th>Roll No</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Students.map((item: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.roll_no}</td>
                  <td>{item.city}</td>
                  <td>
                    <Link to={"/edit"}>
                      <Button
                        className="btn btn-secondary"
                        onClick={() => {
                          HandleEdit(
                            item.id,
                            item.name,
                            item.roll_no,
                            item.city
                          );
                        }}
                      >
                        Edit
                      </Button>
                    </Link>
                    &nbsp;
                    <Button
                      onClick={(e: any) => {
                        HandleDelete(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2" to={"/create"}>
          <Button size="lg">Create New</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
