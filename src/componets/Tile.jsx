import React from "react";
import { useDispatch } from "react-redux";
import { dragDrop, dragEnd, dragStart } from "../store";

const Tile = ({ candy, candyId }) => {
  const dispatch = useDispatch()
  return (
    <div
      className="h-24 w-24 flex justify-center items-center m-0.5 rounded-lg select-none"
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5xp -5px 15px #aaaab7",
        background: "rgba(255, 255, 255, 0.3)",
      }}
    >
      {candy && (
        <img src={candy} alt="candy" className="h-20 w-20" candy-id={candyId} 
        draggable={true}
        onDragStart={e=>dispatch(dragStart(e.target))}
        onDragOver={e=>e.preventDefault()}
        onDragEnter={e=>e.preventDefault()}
        onDragLeave={e=>e.preventDefault()}
        onDrop={e=>dispatch(dragDrop(e.target))}
        onDragEnd={e=>dispatch(dragEnd())}
        />
      )}
    </div>
  );
};

export default Tile;
