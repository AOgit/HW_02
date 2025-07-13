import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {fetchUsers()}, []);
  const fetchUsers = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const obj = await res.json();
    setUsers(obj);
  };

  return (
    <div>
      <h2>User list</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <h2>{u.name}</h2>
            <div>{u.email}</div>
            <div>{u.role}</div>
            <div>
              <img src={u.avatar} alt="User avatar" style={{maxWidth:"250px"}} />
            </div>
            <Link to={`/users/${u.id}`}>To user</Link>
          </li>
        ))}
      </ul>-
    </div>
  );
}
