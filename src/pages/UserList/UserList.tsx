import { Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

export default function UserList() {

    const {users, loading, error} = useUsers();

if (loading) {
    return <div>Loading...</div>
}
if (error) {
    return <div>{error}</div>
}
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {fetchUsers()}, []);
//   const fetchUsers = async () => {
//     const res = await fetch("https://api.escuelajs.co/api/v1/users");
//     const obj = await res.json();
//     setUsers(obj);
//   };

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
            <Link to={`/users/${u.id}`}>
              <img src={u.avatar} alt="User avatar" style={{maxWidth:"250px"}}
               onError={(e) =>
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                 // @ts-ignore
                (e.target.src =
                  "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg")
                }
                />
            </Link>
            </div>
            <Link to={`/users/${u.id}`}>To user</Link>
          </li>
        ))}
      </ul>-
    </div>
  );
}
