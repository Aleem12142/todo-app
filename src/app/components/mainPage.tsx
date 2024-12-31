"use client";
import React, { useState } from "react";

const MainPage = () => {
  //    define stat
  const [todos, setTodos] = useState([
    { task: "project1", id: 1 },
    { task: "project2", id: 2 },
  ]);

  const [inputVal, setInput] = useState('')
  const [id, setId] = useState(0)
  
// function
   const addItem = () =>{
    let obj:any = todos.find(item => item.id === id)

    if(obj){
      let newArray = todos.filter(item => item.id !== obj.id)
      setTodos([...newArray, {task: inputVal, id: id}])
    setInput('')
    setId(0)
    return
    }

    setTodos([...todos, {task: inputVal, id: id}])
    setInput('')
    setId(0)
   }

   const editItem = (id:any) =>{
    let obj:any = todos.find(item => item.id === id)
    setInput(obj.task)
    setId(obj.id)

   }
   const delItem = (id:any) =>{
    let newArray = todos.filter(item => item.id !== id)
      setTodos([...newArray])
   }

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-center text-[40px] underline">Todo App</h1>
      {/* Input start */}
      <div className="flex justify-between gap-5 mt-5">
        <input
          value={inputVal}
          onChange={(e) => setInput(e.target.value)}
          className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Write task"
          type="text"
        />
        <input
          value={id}
          onChange={(e:any) => setId(e.target.value)}
          className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none"
          placeholder="Write id"
          type="number"
        />
        <button onClick={addItem} className="bg-blue-500 hover:bg-blue-600 w-[20%] text-white rounded p-2 ">
          Add Task
        </button>
      </div>
      {/* Input end */}

      {/* Task list header */}
      <h1 className="text-center text-[40px] underline mt-5">Task list</h1>
      {/* Task list */}
      <div className="grid grid-cols-2 gap-5 mt-5">
        {/* Grid item */}
        {todos.map((item: any, i: any) => {
          return (
            <div className="shadow p-4" key={i}>
              <div className="flex justify-between text-lg">
                <span className="shadow rounded-full h-8 w-8 text-center my-auto">
                  {i + 1}
                </span>
                <span onClick={()=>delItem(item.id)} className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-700">
                  x
                </span>
              </div>
              {/* Data */}
              <div className="mt-5 text-[30px] text-gray-700">{item.task}</div>
              <div>
                <h2 onClick={()=>editItem(item.id)} className="text-right cursor-pointer">Edit</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
