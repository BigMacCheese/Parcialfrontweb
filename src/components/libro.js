import Card from "react-bootstrap/Card";

function Libro(props){

    const handleLibroClick = () => {
        props.setSelectedBookId(props.libro.id)
    }
    return(
        <Card style={{width: '18rem', height: '24rem'}} classname="mb-3" onClick={handleLibroClick}>
            <Card.Img style={{ height: '14rem' }} variant="top" src={props.libro.image}/>
            <Card.Body>
                <Card.Title>
                    {props.libro.name}
                </Card.Title>
                <Card.Text>
                    {props.libro.isbn}
                </Card.Text>
            </Card.Body>        
        </Card>
    );
}

export default Libro;