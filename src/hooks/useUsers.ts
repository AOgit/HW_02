import { useEffect, useState } from "react";
import type { User } from "../types";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users");
      if (!res.ok) {
        throw new Error ("Failed to fetch users. Status: " + res.status)
      }
      const obj = await res.json();
      setUsers(obj);
    } catch (err) {
      if (err instanceof Error) {
        setErrMessage(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

    return { users, loading, error: errMessage };

}
