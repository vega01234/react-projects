import { useState, ReactNode } from "react";

type Props = {
    username: string;
    children: ReactNode;
    isFollowing?: boolean;
}

export function TwitterCard({ username, children } : Props) {
    const [isFollowing, setIsFollowing] = useState(false);
    const textButton = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    return (
        <>
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img className='tw-followCard-avatar' src={`https://unavatar.io/${username}`} alt="UserAvatar" />
                    <div className='tw-followCard-info'>
                        <strong>{ children }</strong>
                        <span className='tw-followCard-infoUserName'>@{username}</span>
                    </div>
                </header>
                <aside>
                    <button className={buttonClassName} onClick={handleClick}>{ textButton }</button>
                </aside>
            </article>
        </>
    );
}