import { useEffect, useState } from "react";
import axios from 'axios';
import { FormattedMessage } from "react-intl";

function LibroDetalle({selectedBookId}){

    const [libroDetalle, setLibroDetalle] = useState(null);

    useEffect(() => {
        const URL =  "http://localhost:3000/books/"+selectedBookId;
        axios.get(URL)
            .then(response =>{
                setLibroDetalle(response.data);
            })
            .catch(error =>{
                console.error(error);
            });

        console.log(URL);
        console.log(libroDetalle);
    }, [selectedBookId]);

    if(!selectedBookId) {
        return <p> <FormattedMessage id="No book selected"/> </p>;
    }


    return(
        <div class="card" style={{width: "40rem"}}>
            <div class="card-body">
                <h5 class="card-title">{libroDetalle.name}</h5>
                <hr></hr>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> <strong>ISBN:</strong> {libroDetalle.isbn} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Author"/> </strong> {libroDetalle.author} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Publisher"/> </strong> {libroDetalle.publisher} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Genre"/> </strong> {libroDetalle.gender} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Year"/> </strong> {libroDetalle.year} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Available online"/> </strong> {libroDetalle.available_online ? "Yes": "No"} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Price"/></strong> {libroDetalle.price} </li> 
                    <li class="list-group-item"> <strong> <FormattedMessage id="Summary"/> </strong> {libroDetalle.summary} </li> 
                </ul>
            </div>
        </div>
    );

}

export default LibroDetalle;