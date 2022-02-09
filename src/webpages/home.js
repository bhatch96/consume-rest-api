import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import MaterialTable from "material-table";

const Home = () => {

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
            
            <Grid container   
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <h2></h2>
                <Grid item md={1} justify="center">
                {users.map(user => (
                    <Grid container justifyContent="center">
                        <Grid item md={12} key={user.id}>
                            <img alt={user.fullname} src={user.imageUrl} width="175" height="150" /> 
                        </Grid>
                        <Grid item xs={12} key={user.id}>
                            {user.fullName}
                        </Grid>
                        <Grid item xs={12} key={user.id}>
                            {user.title} 
                        </Grid>
                        <Grid item xs={12} key={user.id}>
                            {user.family} 
                        </Grid>
                        <Divider flexItem orientation="vertical"/>
                        <p/>
                    </Grid> 
                ))}
                </Grid>
            </Grid>


        );
    }
}
export default Home;