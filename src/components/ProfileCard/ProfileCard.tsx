import styles from "./ProfileCard.module.css";
import type { FC } from "react";

interface Profile {
  avatar: string;
  name: string;
  description?: string;
}

const ProfileCard: FC<Profile> = ({ avatar, name, description }) => {
  return (
    <div className={styles.userCard}>
      <img src={avatar} alt="User avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
