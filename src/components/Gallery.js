import { useParams } from "react-router-dom";

export const Gallery = () => {
    const {dogId}=useParams();

    return <div>Image Gallery: {dogId} </div>



};