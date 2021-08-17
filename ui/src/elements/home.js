import React from 'react'
import {useSelector} from 'react-redux';
import Status from '../misc/home/Status'
import Posts from '../misc/home/Posts'
import RightSideBar from '../misc/home/RightSideBar';
import LoadIcon from '../images/loading.gif'

const Home = () => {
    const {homePosts} = useSelector(state => state)
    return (
        <div className="home row mx-0">
            <div className="col-md-8">
            <Status />

                {
                    homePosts.loading 
                    ? <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
                    : (homePosts.result === 0 || homePosts.posts.length ===0 )
                        ? <h2 className="text-center">No Post</h2>
                        : <Posts />
                
            }
           
           
            </div>
            <div className="col-md-4">
            <RightSideBar/>
            </div>
        </div>
    )
}
export default Home