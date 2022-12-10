import React from 'react';
import Show from "./components/show";


const App = () => {

    const [message, setMessage] = React.useState(["a", "b", "c"])
 
  return(

      <main>
        {
          message.length === 0 ?
          <h1>You're all caught up</h1>:
          <h1>You have {message.length} unread {message.length > 1 ? "messages": "message"}</h1>
        }        
      </main>

  );
}

export default App;