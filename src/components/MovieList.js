import React from 'react'
import Card from './Card'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles({
    container:{
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        backgroundColor: "#485461",
        backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"
    }
})

const MovieList = ({arr}) => {

    const classes = useStyle();
    return (
        <div className={classes.container}>
        {arr.map(function mCard(val){
            return(
                <Card
                    key={val.imdbID}
                    imgsrc={val.Poster}
                    name={val.Title}
                    year={val.Year}
                    type={val.Type}
                    iid={val.imdbID}
                />
            )
        })}
        </div>
    )
}

export default MovieList
