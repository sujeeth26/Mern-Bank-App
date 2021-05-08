import React, { useState } from "react";
import {doTransaction } from '../apicalls/tranx'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
function Transfer({sender,receiver}) {

    const [values, setValues] = useState({
        amount: 0,
        error: "",
        success:false,
      });
const senderId=sender._id;
const rId=receiver._id;
console.log("id");
console.log(senderId);
console.log(rId);
console.log("id");
  const { amount , error,success } = values;

  const handleChange  = name => event =>{
    setValues({ ...values, error: false , [name]: event.target.value });
  };

  const onSubmit =(e) => {
    e.preventDefault();
    setValues({...values,error: false})
    doTransaction({senderId,rId,amount})
    .then(data => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
               console.log("transfer done"); 
              setValues({...values,success:true});
          }
          
        })
        .catch(console.log("signin request failed"));
    };

  const TransferForm = () => {
    return (
      <div className="row" style={{marginTop:"20px"}}>
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            
            <div className="form-group">
              <label className="text-dark">Amount</label>
              <input
                className="form-control"
                onChange={handleChange("amount")}
                type="amount"
                placeholder=" Enter amount: "
                value={amount}
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };


  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: success ? "" : "none" }}
    >
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <p style={{textAlign:"center"}}><CheckCircleOutlinedIcon /></p>
      <h4 style={{textAlign:"center"}}>{success}TRANSACTION SUCCESSFUL :)</h4>
    </div>
    </div>
  );

const ren=()=>{
  if(success){ return[
    successMessage()
  ]  
  }
  else{
    return[
      <h2 className="text-center my-1000">Enter Amount</h2>,,
      TransferForm()
    ]
  }
}
  return (
    <div style={{marginTop:"20vh"}}>
      {errorMessage()}
      {ren()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </div>
       
  );
};



export default Transfer;