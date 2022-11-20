import React from 'react'
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid, TextField} from '@mui/material';
import "./Add.css";
import { useState } from "react";

const Add = () => {
    const [form, setForm] = useState({
        nameCloth: "",
        category: "",
        name: "",
        message: ""
    })

    

    const submitButton = () => {
        var valid = true;
        if(isNaN(form.nameCloth) || isNaN(form.category) || isNaN(form.name) || isNaN(form.message)){
            valid = false;
        }

        if (valid == true){




        }
    }





    return(
    <div className="add"> 
      <Typography component="h1" variant="h5" align="center" >
        Submit your article of clothing!     
    </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12}  item>
                  <TextField placeholder="Clothing Item" style={{ fontSize: '18px' ,fontFamily: 'GFS Didot'}} label="Name of Clothing Item" variant="outlined" fullWidth required
                  onChange={(e) => {
                    setForm({...form, nameCloth: e.target.value});
                  }}
                  
                  
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField  placeholder="Value" label="Approximate Value" variant="outlined" fullWidth required 
                    onChange={(e) => {
                    setForm({...form, category: e.target.value});
                  }}


                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField  placeholder="Name" label="Name" variant="outlined" fullWidth required 

                    onChange={(e) => {
                    setForm({...form, category: e.name.value});
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required 
                    onChange={(e) => {
                    setForm({...form, category: e.name.value});
                    }}


                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Upload Image</Typography>
                </Grid>
                    <Grid item xs={6}>
                    <form method = "POST" action="/upload" enctype="mutlipart/form-data">
                        <input type="file" name="image"/>
                        <input type="submit"/>
                    </form>
                    
                    </Grid>
                
                
                
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Add;