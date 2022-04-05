import React from 'react';

const Film = ({url, children}) => {



    return(
        <>
            
            <li><a href={url}>{children}</a></li>
        </>
    )
}

export default Film;