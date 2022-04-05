import React from 'react';
import FilmList from '../components/FilmList';
import Releases from '../components/Releases';

const FilmBox = () => {

    return(
        <>
            <h1>"I'm a FilmBox"</h1>
            <FilmList />
            <Releases />
        </>
    )
}

export default FilmBox;