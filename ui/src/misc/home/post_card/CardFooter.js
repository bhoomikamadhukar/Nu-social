import { Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Send from '../../../images/send.svg'
import LikeButton from '../../LikeButton'
import { useSelector, useDispatch } from 'react-redux'
import { likePost,unLikePost } from '../../../redux/actions/postAction'

const CardFooter = ({post}) => {
    const [isLike, setIsLike] = useState(false)
    const [loadLike, setLoadLike] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(post.likes.find(like => like._id === auth.user._id)){
            setIsLike(true)
        }else{
            setIsLike(false)
        }
    }, [post.likes, auth.user._id])

    const handleLike = async () => {
        if(loadLike) return;
        
        setIsLike(true)
        setLoadLike(true)
        await dispatch(likePost({post, auth}))
        setLoadLike(false)
    }

    const handleUnLike = async () => {
        if(loadLike) return;

        setIsLike(false)
        await dispatch(unLikePost({post, auth }))
        setLoadLike(false)
    }
    return (
        <div className="card_footer">
            <div className="card_icon_menu">
                <div>

                    <LikeButton 
                    isLike={isLike}
                    handleLike={handleLike}
                    handleUnLike={handleUnLike}
                    />
                    <Link to = {`post/${post._id}`} className="text-dark">
                    <i className="far fa-comment"/>
                    </Link>  
                    <img src={Send} alt='Send'/>
                </div>
                <i className="far fa-bookmark"/>
               
            </div>

            <div className="d-flex justify-content-between">
                <h6 style={{padding: '0 25px', cursor: 'pointer'}}>
                    {post.likes.length} likes
                </h6>
                
                <h6 style={{padding: '0 25px', cursor: 'pointer'}}>
                    {post.comments.length} comments
                </h6>
            </div>

            
        </div>
    )
}

export default CardFooter