import React, {useState, useEffect} from "react";
import axios from "axios";

function UserInfo({repos, username}){
    const [userImg, setUserImg] = useState()
    useEffect(async () => {
        if(repos.length === 0){
            let {data} = await axios.get(`https://api.github.com/users/${username}`)
            setUserImg(data.avatar_url)
        } else {
            setUserImg(repos[0].owner.avatar_url)
        }
    }, [username, repos])
    
    return(
        <div id="user-info">
        <img id="user-img" src={userImg}/>
        <p id="username-display">{username.toLowerCase()}</p>
        </div>
    )
}

export default UserInfo