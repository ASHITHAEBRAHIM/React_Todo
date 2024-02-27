import Add from "./Add";
import { useState } from "react";
import Edit from "./Edit";
import TodoItem from "./TodoItem";
import { MoreHorizontal} from 'react-feather';

function Todo(){
    const [showAdd, setShowAdd] = useState(false);
    const [todos, setTodos] =  useState<TodoItem[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const addTodo = () => {
        setShowAdd(!showAdd);
        }
    const handleAddTodo = (newTodo: string) => {
        setTodos((prevTodos) => 
        [...prevTodos,
            { text: newTodo, done: false, index: prevTodos.length },
        ]);
        addTodo();
        };
    const handleToggleDone = (index: number) => {
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos[index] = { ...updatedTodos[index], done: !updatedTodos[index].done };
            return updatedTodos;
        });
    };

    const handleEdit = (index: number) => {
        setEditIndex(index);
      };
     
    const handleSaveEdit = (index: number, newText: string) => {
        setTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          updatedTodos[index] = { ...updatedTodos[index], text: newText };
          return updatedTodos;
        });
    setEditIndex(null);
    };

    const handleDelete = (index: number) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
        setEditIndex(null);
      };

    return (<div className=" border max-w-md mx-auto my-40 bg-white shadow-lg rounded-[40px] overflow-hidden">
        <h1 className="text-2xl font-bold m-8">Todo</h1>
     {showAdd ? <Add onAddTodo={handleAddTodo} onCancel={() => setShowAdd(false)} /> : null}
     
     {todos.length === 0 ? (
        <p className="text-center text-gray-300 my-8">No todos yet</p>
      ) : (
        <ul className="list-none px-4 pt-4">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`mb-4 ${
                todo.done ? "" : ""
              } flex items-center justify-between`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggleDone(index)}
                  className="mr-2 rounded-full"
                />
                {editIndex === index ? (
                  <Edit
                    todo={todo}
                    onSave={handleSaveEdit}
                    onDelete={handleDelete}
                    onCancel={() => setEditIndex(null)}
                  />
                  
                ) : (
                  <span>{todo.text}</span>
                )}
              </div>
              
              <MoreHorizontal
                className="ml-2 cursor-pointer text-gray-300"
                onClick={() => handleEdit(index)}
              />
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center items-center">
  <button className="bg-gray-300 font-bold px-10 py-2 rounded-[10px] text-center w-1/2 mb-6" onClick={addTodo}>
    Add Todo
  </button>
</div>
    </div>
    );
}
export default Todo; 