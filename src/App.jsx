import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { PostList } from "./components/PostList/PostList";

import "./assets/styles/globals.scss";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchedPosts, setSearchedPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json",
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const json = await res.json();
        setPosts(json);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }

  //   timeoutRef.current = setTimeout(() => {
  //     const lowercasedTerm = search.toLowerCase();

  //     const filtered = posts.filter(
  //       (post) =>
  //         post.title.toLowerCase().includes(lowercasedTerm) ||
  //         post.text.toLowerCase().includes(lowercasedTerm),
  //     );

  //     console.log("filtered", filtered);

  //     setSearchedPosts(filtered);
  //   }, 500);

  //   return () => {
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, [search, posts]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const findedPosts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.text.toLowerCase().includes(search.toLowerCase()),
      );

      setSearchedPosts(findedPosts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, posts]);

  return (
    <div className="main">
      <Header setSearch={setSearch} search={search} />
      <PostList posts={searchedPosts} loading={loading} error={error} />
    </div>
  );
}

export default App;
