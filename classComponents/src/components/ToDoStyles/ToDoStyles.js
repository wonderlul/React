import React from "react";
import Button from "./ToDoStyles.styles";

export const Input = ({ value, inputOnChange, handleAdd }) => {
  return (
    <div className="py-12">
      <input
        value={value}
        onChange={inputOnChange}
        className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="write your task here"
      />
      <Button disabled={!value} onClick={handleAdd}>
        add task
      </Button>
    </div>
  );
};

export const Container = ({ children }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="xl:w-11/12 lg:w-3/4 w-full mx-auto text-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export const Table = ({ todos, markAsDone, removeTask }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Task
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Status
          </th>
          <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo, index) => (
          <tr
            key={index}
            className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
          >
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Task
              </span>
              {todo.title}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Status
              </span>

              {todo.done ? (
                <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">
                  done
                </span>
              ) : (
                <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">
                  not done
                </span>
              )}
            </td>
            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
              <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                Actions
              </span>
              <button
                onClick={() => markAsDone(todo)}
                className="text-blue-400 hover:text-blue-600 underline"
              >
                Mark as done
              </button>
              <button
                onClick={() => removeTask(todo)}
                className="text-blue-400 hover:text-blue-600 underline pl-6"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
