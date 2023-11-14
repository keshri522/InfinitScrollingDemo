import React, { useEffect, useState } from "react";
import Child from "../Results/Child";
import LoadingSpinner from "../../Loading/spinner";
// this is the home components or parent components
const Home = () => {
  const [result, Setresult] = useState([]);
  const [page, Setpage] = useState(1);

  const [loading, Setloading] = useState(false); // for the loading effects
  // using the useffect hook to call an api
  const fetchData = async () => {
    Setloading(true);

    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_limit=9&_page=${page}`,
        { method: "GET" }
      );
      const data = await result.json();
      // console.log(data);
      setTimeout(() => {
        Setresult((prev) => [...prev, ...data]);
        Setloading(false);
        // console.log(data);
      }, 1000);
    } catch (error) {
      // Handle errors (e.g., log error, show message to user)
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    document.addEventListener("scroll", ScrollFunction);
    // need to remove the or clean the event
    return () => document.removeEventListener("scroll", ScrollFunction);
  }, [page]);

  // this function will run or check the infinite scrll
  const ScrollFunction = async () => {
    try {
      setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          // for debouncing means while all the request cancelled
          Setpage(page + 1);
        }
      }, 1500);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <>
      <div className="first">
        <h1> Infinite Scroll</h1>
      </div>

      <div className="child">
        {result &&
          result?.map(
            (
              ele,
              index // passing ele as a props to the child components
            ) => (
              <div className="divs " key={index}>
                <Child index={index + 1} ele={ele}></Child>
              </div>
            )
          )}
      </div>
      <div className="center">{loading && <LoadingSpinner />}</div>
    </>
  );
};

export default Home;
