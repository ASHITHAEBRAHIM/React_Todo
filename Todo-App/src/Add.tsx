import { useState } from "react";
import {Check, X} from 'react-feather';
interface AddProps {
    onAddTodo: (newTodo: string) => void;
    onCancel: () => void;
  }
function Add({ onAddTodo, onCancel }: AddProps) {
    const [newTodo, setNewTodo] = useState('');
    const Add =()=>{
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };
    const handleCancel = () => {
        onCancel();
        setNewTodo('');
      };
    return (
<div className="flex flex-col gap-2 border-2 bg-gray-100 p-4 rounded-md text-center relative mx-8 my-4">
    
    <h4 className=" flex flex-start gap-2 font-semibold"><Check/> lil todo </h4>
<div className="absolute top-2 right-1">
<X className="cursor-pointer text-black-300" onClick={() => handleCancel()} />
      </div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
        className="border px-2 pb-8 rounded-md mr-2"
      />
      <button onClick={Add} className="bg-blue-500 text-white px-4 py-2 rounded-md"> 
        Add
      </button>
    </div>
  );
}

export default Add;