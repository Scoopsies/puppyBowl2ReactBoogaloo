import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

const Pup = ({puppies}) => {
    const [pup, setPup] = useState(null)
    const {id} = useParams()


    useEffect(() => {
        const getPup = async () => {
            const {data} = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players/${id}`)
            setPup(data.data.player)
        }
        getPup()
    },[])

    return !pup ?  <Loading/>
        :<>
        <h1>{pup.name}</h1>
        <h3>{pup.breed}</h3>
        <h3>status: {pup.status}</h3>
        <img src={pup.imageUrl} alt="" />
        </>
}

export default Pup;