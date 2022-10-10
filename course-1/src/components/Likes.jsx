import { useState } from "react";

const Likes = () => {
    console.log('Render Like')
    const [like, setLikes] = useState(0);


    return (
        <button onClick={() => setLikes(like + 1)}>
            {like} Likes
        </button >
    )
}

export default Likes