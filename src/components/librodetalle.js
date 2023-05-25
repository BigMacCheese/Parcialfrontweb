function LibroDetalle(props){

    return(
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{props.libro.name}</h5>
                    <p class="font-weight-bold">ISBN</p>
                    <p class="font-weight-bold">Author</p>
                    <p class="font-weight-bold">Publisher</p>
                    <p class="font-weight-bold">Genre</p>
                    <p class="font-weight-bold">Year</p>
                    <p class="font-weight-bold">Available Online</p>
                    <p class="font-weight-bold">Price</p>
                    <p class="font-weight-bold">Summary</p>
                    
            </div>
        </div>
    );

}

export default LibroDetalle;