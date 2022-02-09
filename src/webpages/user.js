import React from 'react';
import MaterialTable from "material-table";

const User = () => {
return(
        
        <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
            
            <MaterialTable
                columns={[
                    {
                    title: "Name",
                    field: "name",
                    headerStyle: {
                        backgroundColor: "green"
                    }
                    },
                    {
                    title: "Occupation",
                    field: "job",
                    headerStyle: {
                        backgroundColor: "blue"
                    }
                    },
                    {
                    title: "Age",
                    field: "age",
                    type: "numeric",
                    headerStyle: {
                        backgroundColor: "red"
                    }
                    }
                ]}/>
        </div>
    );
}
export default User;