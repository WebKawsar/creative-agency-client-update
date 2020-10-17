import { Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Dashboard from "../Components/Dashboard/Dashboard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  { value: "pending", label: "pending" },
  { value: "onGoing", label: "onGoing" },
  { value: "done", label: "done" },
];

const AdminServiceList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetch(`https://creative-agency-simple.herokuapp.com/allOrders`)
      .then((response) => response.json())
      .then((result) => setOrders(result));
      
  }, []);

  const handleStatus = (event, id) => {

    fetch(`https://creative-agency-simple.herokuapp.com/updateSurviceById/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: event.value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((response) => response.json())
      .then((data) => {

        if (data) {
          alert("You have successfully updated an order status");
        }
        else{
          alert("Failed to data load on server");
        }

      });

  };
  const defaultOption = options[0];

  return (
    <>
      <Dashboard>
        <Grid container>
          <Grid item sm={12} md={12}>
            <Paper>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={order._id}>
                      <td>{index + 1}</td>
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.service}</td>
                      <td>{order.message}</td>
                      <td>
                        <Dropdown
                          onChange={(e) => {
                            handleStatus(e, `${order._id}`);
                          }}
                          options={options}
                          value={defaultOption}
                          placeholder="Select an option"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Dashboard>
    </>
  );
};

export default AdminServiceList;
