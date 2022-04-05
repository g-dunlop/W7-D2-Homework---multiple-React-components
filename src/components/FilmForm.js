import React, {useState} from 'react';

const FilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleUrlChange = (evt) => {
        setUrl(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();


        if (!nameToSubmit || !urlToSubmit){
            return
        }

        //Need to update films in film list
        onFilmSubmit({
            name:nameToSubmit,
            url:urlToSubmit
        })

        setName("");
        setUrl("");
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Film name" />
            <input type="text" id="url" value={url} onChange={handleUrlChange} placeholder="Film url" />
            <input type="submit" value="Add Film" />
        </form>
    )
}

export default FilmForm;