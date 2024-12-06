import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState();
    const getAllBeers = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => setBeers(response.data))
            .catch(err => console.error(err));
    };
    useEffect(() => {
        getAllBeers();
    }, []);

    const adaptedString = (string) => (
        string.slice(
            string[0],
            string.indexOf('<')
        )
    )
    return (
        <>
            {console.log(beers)}
            {beers && beers.map((beer) => (
                <Link key={beer._id} to={`/beers/${beer._id}`}>
                    <div className="container gap-5 d-flex flex-row">
                        <div className="col-2">
                            <img className="img-fluid" src={beer.image_url} alt={beer.name} />
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                            <h2 style={{ color: "black", fontSize: "3rem" }}>{beer.name}</h2>
                            <p style={{ color: "gray", fontSize: "2rem" }}>{beer.tagline}</p>
                            <p style={{ color: "black" }}><b>Created by:</b> {adaptedString(beer.contributed_by)}</p>
                        </div>
                    </div>
                    <hr />
                </Link>
            ))}
        </>
    );
}

export default AllBeersPage;
