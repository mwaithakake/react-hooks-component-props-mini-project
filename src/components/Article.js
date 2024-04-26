import React from "react";

function Article({title, date= "January 1, 1970", preview}) {
    return (
        <main>
          <h3>{title}</h3>
          <small>{date}</small>
          <p>{preview}</p>


        </main>
    )
}

 
export default Article