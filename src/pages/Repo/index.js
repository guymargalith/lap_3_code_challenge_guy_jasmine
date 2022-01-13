import React from "react";
import {BackButton} from '../../components'

function Repo({selectedRepo}) {
    const date = new Date(selectedRepo.updated_at)
    return(
        <>
        <BackButton />
        <div id="repo-display">
        <h1>{selectedRepo.name}</h1>
        {selectedRepo.description && <h3>{selectedRepo.description}</h3>}
        <ul>
            <li>Issue count: {selectedRepo.open_issues_count}</li>
            <li>Forks: {selectedRepo.forks_count}</li>
            <li>Stargazers: {selectedRepo.stargazers_count}</li>
            <li>Watchers: {selectedRepo.watchers_count}</li>
            <li>Last updated: {date.toString()}</li>
        </ul>
        </div>
        </>
    )
}

export default Repo