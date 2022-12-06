import React, { useEffect, useState } from "react"


const Products = () => {
    const [users, setUsers] = useState([])
  
    const fetchUserData = () => {
      fetch("https://fakestoreapi.com/products")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])
  
    return (
      <div>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Products;