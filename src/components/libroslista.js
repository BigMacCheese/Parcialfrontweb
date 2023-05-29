import { useEffect, useState } from "react";
import Libro from "./libro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import axios from 'axios';
import LibroDetalle from "./librodetalle";

function LibrosLista () {
    
    const [librosLista, setLibrosLista] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        const URL =  "http://localhost:3000/books";
        axios.get(URL)
            .then(response =>{
                setLibrosLista(response.data);
            })
            .catch(error =>{
                console.error(error);
            });
    }, []);

    return(
        <div className="container">
            <hr></hr>
            <div class="row">
                <div class="col-md-6">
                    <Row>
                        {librosLista.map((libro) => (
                            <Col key={libro.id}>
                                <Libro libro={libro} setSelectedBookId={setSelectedBookId} />
                            </Col>
                        ))}
                    </Row>
                </div>
                <div class="col-md-6">
                    <LibroDetalle selectedBookId={selectedBookId}/>
                </div> 
            </div>
        </div>
    );
}

export default LibrosLista;