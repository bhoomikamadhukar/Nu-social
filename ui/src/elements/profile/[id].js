import React from 'react';
import Info from '../../misc/profile/Info'
import Posts from '../../misc/profile/Posts'
import {useSelector} from 'react-redux'
import LoadIcon from '../../images/loading.gif'

const Profile = ()=>{
    const {profile} = useSelector(state=>state)
    return(
        <div className ="profile">
            {
                profile.loading
                ? <img className ="d-block mx-auto my-4" src={LoadIcon} alt ="loading"/>
                : <Info />
            }
          
            <Posts />
        </div>
    )
}
export default Profile