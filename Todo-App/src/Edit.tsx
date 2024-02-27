import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Check ,X} from 'react-feather';
interface EditProps {
    todo: TodoItem;
    onSave: (index: number, newText: string) => void;
    onDelete: (indaex: number) => void;
    onCancel: () => void;
  }

function Edit({ todo, onSave, onDelete ,onCancel }: EditProps){
    const [editedText, setEditedText] = useState(todo.text);

    const handleSave = () => {
        onSave(todo.index, editedText);
      };
      const handleCancel = () => {
        onCancel();
      };
return <div className="flex flex-col gap-2 border-2 bg-gray-100 p-4 rounded-md text-center relative">
  <h4 className=" flex flex-start gap-2 font-semibold"><Check/>lil todo </h4>
  <div className="absolute top-2 right-1">
<X className="cursor-pointer text-black-300" onClick={() => handleCancel()} />
      </div>
    <input type="text" 
           value={editedText}
           className="border px-2 pb-8 rounded-md mr-2"
           onChange={(e) => setEditedText(e.target.value)}></input>
    <button className="bg-blue-500 text-white px-2 py-1 rounded-md"  onClick={handleSave}>save</button>
    <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={() => onDelete(todo.index)}>delete</button>
</div>
};
export default Edit;