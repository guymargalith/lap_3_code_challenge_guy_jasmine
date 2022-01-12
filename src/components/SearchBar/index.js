import React, {useState} from 'react'

function SearchBar({setUsername}) {
    const [ nameInput, setNameInput ] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault()
        setUsername(nameInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input type="text" id='username' onChange={e => setNameInput(e.target.value)} />
            <input type="submit" value="Find" />
        </form>
    )
}

export default SearchBar