import React, { useState, useEffect } from "react";
import { getUsers } from '../apicalls/user'

export default function Customers() {
  const [Users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const loadAllUsers = () => {

        getUsers().then(data => {
        /*if (data.error!=" ") {
        setError(data.error);
        } else {
            data = Array.from(data.items);
        console.log(data);*/
        data = Array.from(data);
        console.log(data);
            setUsers(data);
        }).catch(err=>{
               console.log(err);
        })

  };

  useEffect(() => {
    loadAllUsers();
  }, []);

  return (
    <div>

        <div class="p-3 mb-2 bg-light text-dark">
         <h1 style={{textAlign:"center"}}>CUSTOMERS</h1>
         </div>

              <div class="container" style={{backgroundColor:"#f47373",border:"1px solid black",margin:"10px"}}>
                          <div class="row">
                            <div class="col-sm">
                              NAME
                            </div>
                            <div class="col-sm">
                              BALANCE
                            </div>
                        </div>
                      </div>
              <div>
            {error}
          {Users.map((u, index) => {
            return (
              <div>
                  <div key={index} >
                      <div class="container" style={{backgroundColor:"#bedadc",border:"1px solid black",margin:"10px"}}>
                              <div class="row">
                                <div class="col-sm">
                                  {u.name}
                                </div>
                                <div class="col-sm">
                                  {u.balance}
                                </div>
                            </div>
                          </div>                 
                  </div>
              </div>
            );
          })}  
        </div>
    </div>
    
        );
}
