// import React from "react";
// import Article from "./Article";

// function ArticleList(posts){
//     const getArticles =posts.map((post) => {
//         <Article key={post.id} title={post.title}  date={post.date}  preview={post.preview}   />
//         return(
//             <main>{getArticles}</main>
//         )
//     })
// }

// export default ArticleList

import React from "react";
import Article from "./Article";
function ArticleList({posts}) {
  return (
    <main>
      {posts.map((post) => (
        <Article
        key={post.id}
          post={post.title}
          date={post.date}
          preview={post.preview}
        
        />
      ))}
    </main>
  );
}

export default ArticleList;