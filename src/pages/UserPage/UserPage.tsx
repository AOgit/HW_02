import { useEffect, useState } from "react";
import type { User } from "../../types";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    fetchProduct(id as string);
  }, [id]);
  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const obj = await res.json();
    setUser(obj);
  };

  return (
    <>
      {user && (
        <div>
          <h2>{user.name}`s page</h2>
          <div>{user.email}</div>
          <div>{user.role}</div>
          <div>
            <img
              src={user.avatar}
              alt="User avatar"
              style={{ maxWidth: "250px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
