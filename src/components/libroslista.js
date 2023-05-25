import { useEffect, useState } from "react";

function LibrosLista () {
    
    const [librosLista, setLibrosLista] = useState([]);
    useEffect(() => {
        const URL =  "https://localhost:3000/api/v1/books";
        fetch(URL).then(data => data.json()).then(data => {
            setLibrosLista(data);
    })
}, []);

    return(
        <div className="container">
            <hr></hr>
            <Row>
                <Col>
                {librosLista.map((libro) => (
                    <Col key={libro.id}>
                        <Libro libro={libro} />
                    </Col>
                ))}
                </Col>
                <Col>
                
                </Col>
            </Row>
        </div>
    );
}

export default LibrosLista();