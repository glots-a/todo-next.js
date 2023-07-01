"use client"
import { useEffect, useState } from "react"


type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  onhandleDelete: (id: string) => void;
}

export function TodoItem({ id, title, complete, toggleTodo, onhandleDelete }: TodoItemProps) {
  const [render, isRender] = useState(false);

  const renderStatus = () => {
    isRender(!render)
  }
  useEffect(() => {
    return () => {
      window.location.reload();
    }
  }, [render])

console.log('rerender')
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={e => {
          toggleTodo(id, e.target.checked);
          renderStatus();
        }}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <button
        onClick={() => {
          onhandleDelete(id)
          renderStatus();
        }}
        className="border border-slate-300 text-rose-600 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none ml-20"
      >
        x
      </button>
    </li>
  )
}
