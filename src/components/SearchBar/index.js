import React, {useState} from 'react'

function SearchBar({setUsername}) {
    const [ nameInput, setNameInput ] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault()
        setUsername(nameInput)
        e.target.elements.namedItem('username').value = ''
    }

    return (
        <form id= "form" onSubmit={handleSubmit}>
            {/* <label  htmlFor='username'>Username</label> */}
            <input type="text" id='username' placeholder='Username' onChange={e => setNameInput(e.target.value)} />
            <input type="submit" value="Find" />
        </form>
    )
}

export default SearchBar