exports.doTransaction= ({senderId,rId,amount})=>{
    console.log("api call00");
    console.log(senderId);
    return fetch(`http://localhost:8000/api/tranx/${senderId}/${rId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({senderId,rId,amount})
    })
      .then(response => {
          console.log(response);
          console.log("in api after call");
        return response;
      })
      .catch(err => {
        console.log("in api error after call");
          console.log(err)});
    }



    exports.getAllTransactions = () => {
      return fetch(`http://localhost:8000/api/getAllTransactions`, {
        method: "GET"
      })
        .then(response => {
          return response.json();
        })
        .catch(err => console.log(err));
    };