import { Link } from "react-router-dom"

const Puppies = ({puppies}) => {

   return (
    <>
    <h1>Puppies</h1>
    <div className="pupList">
        {
            puppies.map(pup => {
                return <Link
                key={pup.id}
                to={`/puppies/${pup.id}`}
                >{pup.name}</Link>
            })
        }
    </div>
    </>
   )
}

export default Puppies