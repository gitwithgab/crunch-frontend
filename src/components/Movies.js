import React, { useContext, useEffect } from 'react';
import MovieContext from "../context/MovieContext"


const Movies = () => {

    const {movie,setMovie} = useContext(MovieContext)

    useEffect (() => {

        fetch('http://localhost:4000/show?category=movie')
        
        .then(res => res.json())
        
        .then ((json) =>{
            setMovie(json.data)
        })

    }, [])

    
    return (
        <>
            
        </>
    )
}

export default Movies
