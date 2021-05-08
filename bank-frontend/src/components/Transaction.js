import React,{ useState, useEffect } from 'react'
import CustomerPicker from "./CustomerPicker"
import Transfer from "./Transfer"
import { getUser } from '../apicalls/user'

function Transaction() {
  
    const [cust1,setCust1]=useState({});
    const [cust2,setCust2]=useState({});

    const handleCustomerChange = async (id) => {
        console.log(id);
            const data = await getUser(id);
            console.log(data);
            setCust1(data);
            
          }
    const ReceiverChange = async (id) => {
            const data = await getUser(id);
            console.log(data);
            setCust2(data);
            
          }
    

    return (
        <div>
            <CustomerPicker handleCustomerChange={handleCustomerChange} ReceiverChange={ReceiverChange}/>
           <Transfer sender={cust1} receiver={cust2}  /> 
        </div>
    )
}

export default Transaction;
