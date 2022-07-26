import React from "react";
import { Draggable } from "react-beautiful-dnd";
import FooterTodo from "./FooterTodo";

const TodoCard = ({ todoItems, setTodoToEdit, setIsEditTodo, todoType }) => {
  return (
    <>
      {todoItems.map((item, idx) => {
        return (
          <Draggable key={item.id} draggableId={item.id} index={idx}>
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`p-4 mb-6 min-h-[50px] rounded-md shadow-md ${
                    snapshot.isDragging ? "bg-white bg-opacity-70" : "bg-white"
                  } `}
                  style={{ ...provided.draggableProps.style }}
                  onClick={() => {
                    setTodoToEdit({ todoType: todoType, ...item });
                    setIsEditTodo(true);
                  }}
                >
                  {/* each card here */}
                  <span>{item.title}</span>
                  <div className="text-[#6B6B6B] text-xs mt-4">
                    {item.description}
                  </div>
                  <FooterTodo />
                </div>
              );
            }}
          </Draggable>
        );
      })}
    </>
  );
};

export default TodoCard;
