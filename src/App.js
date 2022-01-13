import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Repo } from './pages'
// import { UserInfo } from './components';
import axios from 'axios';


function App() {
    const [ username, setUsername ] = useState();
    const [repos, setRepos] = useState();
    const [selectedRepo, setSelectedRepo] = useState()

    useEffect(async () => {
        try {
            let {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
            setRepos(data)
        } catch (err) {
            console.warn(err);
        }
    }, [username])

    return(
        <div id="app">
            <main>
                <h1 id='heading'>Find My Repos</h1>
                <Routes> 
                    <Route path= "/" element={<Main username={username} setUsername={setUsername} repos={repos} setSelectedRepo={setSelectedRepo} />}/>
                    <Route path = "/repo" element={<Repo selectedRepo={selectedRepo} />} />
                    
                </Routes>
            </main>
        </div>
    )
}

export default App;