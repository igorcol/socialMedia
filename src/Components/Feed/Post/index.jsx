import React from 'react';
import { MoreVert } from "@material-ui/icons"
import './styles.css';




function Post({user, description, image}) {
  return (
    <div className="post">
      <div className="postWrapper">

         <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={user.image}/>
              <span className="postUsername">{user.username}</span>
              <span className="postDate">33 minutos atrás</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
         </div>

         <div className="postCenter">
           <span className="postText">{description}</span>
           <img src={image ? image : ''} className="postImg" />
         </div>

         <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assets/like.png" />
              <img className="likeIcon" src="assets/heart.png" />
              <span className="postLikeCounter">23 Curtidas</span>
            </div>
            <div className="postBottomRight">
              <spam className="postCommentText">9 Comentários</spam>
            </div>
         </div>

      </div>
    </div>
  );
};


export default Post;
