import { useState } from 'react';

type Props = {
  image: string;
  name: string;
  username: string;
  initialFollow?: boolean;
};

function TwitterCard({ image, name, username, initialFollow }: Props) {
    const [isFollowing, setIsFollowing] = useState(initialFollow)
    const textButton = isFollowing ? "Siguiendo" : "Seguir"
    const classNameButton = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    const handleFollow = () => {
        setIsFollowing(!isFollowing)
    }
    return (
    <>
      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img className="tw-followCard-avatar" src={image} alt="Image" />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">@{username}</span>
          </div>
        </header>
        <aside>
          <button className={classNameButton} onClick={handleFollow}>{textButton}</button>
        </aside>
      </article>
    </>
  );
}

export default TwitterCard;
