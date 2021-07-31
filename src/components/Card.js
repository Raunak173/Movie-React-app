import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core'
import MovieInfo from './MovieInfo'

const useStyle = makeStyles({
    card:{
        padding: 20,
        height: 400,
        width: 450,
        margin: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffee0'
    }
})    

const Card = ({imgsrc,name,year,type,iid}) => {

    const classes = useStyle();

    const [id,setId] = useState();

    return (
        <div className={classes.card}>
        {!id && <img style={{height:260, width:180}} src={imgsrc}/>}
        <h1 onClick={()=>{setId({iid})}} >{name}</h1>
        <p>Year of release: {year}</p>
        <p>Type: {type}</p>
        {id && <MovieInfo dis={id.iid}/>}
        </div>
    )
}

export default Card
