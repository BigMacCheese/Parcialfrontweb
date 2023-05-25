function Libro(props){
    return(
        <Link to={"/books/" + props.libro.id}>
        <Card style={{width: '18rem', height: '24rem'}} classname="mb-3">
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
        </Link>
    );
}

export default Libro;