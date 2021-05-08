export const getUsers = () => {
    return fetch(`http://localhost:8000/api/allCustomers`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const getUser = (id) => {
    return fetch(`http://localhost:8000/api/oneCustomer/${id}`, {
      method: "GET"
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .catch(err => console.log(err));
  };