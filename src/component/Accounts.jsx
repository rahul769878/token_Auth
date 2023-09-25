import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthFetchWithInterSeperator from "./AuthFetchWithInterSeperator";

const Accounts = () => {
    const [data, setData] = useState([]);

    const navi = useNavigate();


    useEffect(() => {
        AuthFetchWithInterSeperator.get("/accounts")
        .then(y => y.data)
        .then(y => setData(y))
        .catch(y => { navi("/")})
    }, [])

  
        
    return <div>
        <h1 className="container mt-5">Data Of Accounts:</h1>
    <table className="table container mt-3">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Namr</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
        {data.map((item)=>{
            return <tbody>
            <tr>
            <th scope="row">{item.title}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
          </tr>
    </tbody>
        })}
      
  </table>
  </div> 
}


export default Accounts;