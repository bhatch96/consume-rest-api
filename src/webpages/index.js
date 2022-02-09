import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";

const Index = () => {

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <div className="Index">
        <h3>test</h3>
            <MaterialTable
                title="Game of Thrones Characters"
                // data={users}
                // columns={[
                //     {
                //     title: "fullName",
                //     field: "fullName",
                //     },
                //     {
                //     title: "Title",
                //     field: "title",
                //     },
                //     {
                //     title: "Family",
                //     field: "family",
                //     //   type: "numeric",
                //     }
                // ]}
                // data={isLoaded}
                // title="Material-Table Demo"
              />
        </div>
        );
    }
}
export default Index;