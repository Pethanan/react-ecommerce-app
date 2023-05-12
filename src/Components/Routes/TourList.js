import React from "react";
import { Container, Table } from "react-bootstrap";

const TourList = () => {
  const tours = [
    {
      id: 1,
      date: "JUL16",
      place: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 2,
      date: "JUL16",
      place: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 3,
      date: "JUL16",
      place: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      id: 4,
      date: "JUL16",
      place: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  const tourElements = (
    <Table responsive>
      <tbody>
        {tours.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.place}</td>
            <td>{item.venue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
  return (
    <Container
      style={{
        margin: "auto",
        textAlign: "center",
        marginTop: "60px",
      }}
    >
      <h1 style={{ marginBottom: "60px" }}>Tours</h1>
      {tourElements}
    </Container>
  );
};

export default TourList;
