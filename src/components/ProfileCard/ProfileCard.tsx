interface Profile {
    avatar: string;
    name: string;
    description?: string;
}

export default function ProfileCard (props: Profile) {
    const {avatar, name, description} = props;
    return (
        <> 
        <div className="profile-card">
            <img src={avatar}  alt="User avatar" />
            <h2>{name}</h2>
            <p>{description}</p>     
        </div>
    </>
    );
}