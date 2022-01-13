import React from "react";
import { useNavigate } from 'react-router-dom'

function RepoList({repos, setSelectedRepo}) {
    const navigate = useNavigate()

    const handleClick = (repo) => {
        setSelectedRepo(repo)
        navigate('/repo')
    }
    return (
        <>
        <h2 id="repos-heading">Repositories</h2>
        <div id="repos-list">
            {repos.map(repo => <a className="li-repos" key={repo.id} onClick={() => handleClick(repo)}>{repo.name}</a>)}
        </div>
        </>
    )
}

export default RepoList