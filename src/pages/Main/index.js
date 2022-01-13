import React, {useState} from "react";
import { SearchBar, RepoList, UserInfo } from "../../components";

function Main({username, setUsername, repos, setSelectedRepo}) {
    
    return (
        <>
        <SearchBar setUsername={setUsername} />
        {username && (<div id="info"><UserInfo username={username} repos={repos} /> <RepoList repos={repos} setSelectedRepo={setSelectedRepo} /></div>)}
        </>
    )
}

export default Main