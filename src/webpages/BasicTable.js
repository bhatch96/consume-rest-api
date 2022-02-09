import React from "react";
import MaterialTable, { Column } from "@material-table/core";

const lookup = { true: "Available", false: "Unavailable" };

const columns = [
  { title: "First Name", field: "firstName" },
  { title: "Last Name", field: "lastName" },
  { title: "Birth Year", field: "birthYear", type: "numeric" },
  { title: "Availablity", field: "availability", lookup }
];

const data = [
  { firstName: "Tod", lastName: "Miles", birthYear: 1987, availability: true },
  { firstName: "Jess", lastName: "Smith", birthYear: 2000, availability: false }
];

export const BasicTable = () => <MaterialTable columns={columns} data={data} />;