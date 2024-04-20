import React from 'react';
import './Circles.css'

interface User {
    username: string;
    avatar: string;
}

interface CircleProps {
    users: User[];
}

const Circles: React.FC<CircleProps> = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <div key={index} className="tableCell">
                    <a href={`./${user.username}.html`}>
                        <img src={user.avatar} alt={`${user.username} Legacy mods`} width="70" height="70" />
                        <br />
                        <span>{user.username}</span>
                    </a>
                </div>
            ))}
        </>
    );
};

export default Circles;
