import React from 'react';
import { 
  PermMedia,
  Label,
  Room,
  EmojiEmotions

} from "@material-ui/icons"
import './styles.css';
import Button from '../../assets/Button';

const Items = [
  {
    title: "Fotos ou Vídeos",
    htmlColor: "tomato",
    icon: PermMedia
  },
  {
    title: "Categoria",
    htmlColor: "blue",
    icon: Label
  },
  {
    title: "Local",
    htmlColor: "green",
    icon: Room
  },
  {
    title: "Sentimentos",
    htmlColor: "goldenRod",
    icon: EmojiEmotions
  }
]

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">

        <div className="shareTop">
            <img src="/assets/person/2.jpeg" className="shareProfileImg" />
            <input 
              placeholder="What's in your mind?" 
              className="shareInput"
            />
        </div>

        <hr className="shareHr"/>

        <div className="shareBottom">
            <div className="shareOptions">
                {
                  Items.map(item => (
                    <div className="shareOption" key={item.title}>
                      <item.icon htmlColor={item.htmlColor} className="shareIcon"/>
                      <span className="shareOptionText">{item.title}</span>
                    </div>
                  ))
                }
            </div>
            <Button text="Compartilhar" />
        </div>
      </div>
    </div>
  );
};

export default Share;
