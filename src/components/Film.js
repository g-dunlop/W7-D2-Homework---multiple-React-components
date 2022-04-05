import React from 'react';

const Film = ({url, children}) => {



    return(
        <>
            <h3 className="film-listing"><li><a className="film-link" target="_blank" href={url}>{children}</a></li></h3>
        </>
    )
}

export default Film;