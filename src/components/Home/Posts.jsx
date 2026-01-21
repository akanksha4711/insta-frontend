import { useState } from "react";
import { UserCard } from "../commons/UserCard";
import { FaRegHeart } from "react-icons/fa";
import { SiTheconversation } from "react-icons/si";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const BASE_URL = "http://127.0.0.1:8000";

export const Posts = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPosts(data);
    }

    try {
      loadPosts();
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-6 w-[400px] text-sm">
      {posts.map((post) => (
        <div className="flex flex-col gap-2" key={post._id}>
          <div>
            <UserCard
              username={post.author.username}
              profileImg="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <img className="rounded" src={post.imageUrl} />
          <div className="flex gap-4">
            <span className="flex gap-1 items-center">
              <FaRegHeart size={20} />
              {post.likes.length > 0 && post.likes.length}
            </span>
            <span className="flex gap-1 items-center">
              <SiTheconversation size={20} />
              {post.commentCount > 0 && post.commentCount}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">{post.author.username}</span>
            <span>{post.caption}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
