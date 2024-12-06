import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beer, setBeer] = useState();
    const { beerId } = useParams();
    const getBeer = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => setBeer(response.data))
        .catch(err => console.error(err));
    }
    useEffect(() => {
        getBeer()
    }, [beerId]);
    return (
        <>
        </>
    );
}

export default BeerDetailsPage;
