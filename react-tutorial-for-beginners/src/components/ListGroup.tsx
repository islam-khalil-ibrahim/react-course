import { Fragment, useState } from "react";

interface props {
    items: string[];
    heading: String;
    onSelectItem: (item: string) => void
  }
function ListGroup( {items ,heading ,onSelectItem}:props) {
  const [selectIndex, setSelectIndex] = useState(-1);
  const [name, setName] = useState("");


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
