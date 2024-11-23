import Message from "./message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let items = ["new york", "san francisco", "tokyo", "london"];
  const handelSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      <Message />
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handelSelectItem}
      />
      <div>
        {alertVisibility && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
        <Button
          onClick={() => {
           setAlertVisibility(true)
          }}
        >
          My Button
        </Button>
      </div>
    </>
  );
}

export default App;
