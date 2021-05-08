import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getUsers } from '../apicalls/user'



const CustomerPicker = ({ handleCustomerChange,ReceiverChange }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getUsers().then(data => {
        data = Array.from(data);
        console.log(data);
        setCustomers(data);
        }).catch(err=>{
            console.log(err);
        })
  }, []);

  return (
      <div style={{backgroundColor:"#b3e5cc",border:"1px solid #9cabc0",margin:"20px",padding:"30px"}}>
          <div class="container">
            <div class="row">
                <div class="col-sm">
            <FormControl >
                    <NativeSelect defaultValue="" onChange={(e) => handleCustomerChange(e.target.value)}>
                        <option value="">select sender</option>
                        {customers.map((c, i) => <option key={i} value={c._id}>{c.name}</option>)   }
                        
                    </NativeSelect>
            </FormControl>
            </div>
            <div class="col-sm">
            <FormControl >
                <NativeSelect defaultValue="" onChange={(e) => ReceiverChange(e.target.value)}>
                    <option value="">select receiver</option>
                    {customers.map((c, i) => <option key={i} value={c._id}>{c.name}</option>)}
                </NativeSelect>
         </FormControl>
         </div>
         </div>
         </div>
    </div>
  );
};

export default CustomerPicker;