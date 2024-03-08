import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";


function Barbers() {
  const [records, setRecords] = useState([])

  // useEffect(() =>{
    
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(json =>console.log(json))
  //   .then(data => setRecords(data))
  //   .catch(err => console.log(err))
  // })
console.log(records)
  useEffect(() => {
    // Use Axios to fetch data
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Set records state with data from the response
        setRecords(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts
  return (
    <>
        <Header></Header>
        <hr></hr>
        <div className='container'>Barbers</div>
        <p></p>
        <table class="table table-striped table-responsive{-sm|-md|-lg|-xl|-xxl}">
  <thead>
    <tr>
      <th scope="col">ID#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>

  {records.map((list, index) =>(
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.username}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
                <td>{list.address.street}, {list.address.suite}, {list.address.city}, {list.address.zipcode}</td>
                <td>{list.website}</td>
                 </tr>
            ))}
    {/* <tr>
      <th scope="row">1</th>
      <td>ID</td>
      <td>Username</td>
      <td>Email</td>
    </tr> */}
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
{records.map((list, index) =>(
              <div key={index}>
                <td>{list.id}</td>

                <td>My website is {list.website}</td>
                 </div>
            ))}
        <Footer></Footer>
    </>
  )
}

export default Barbers