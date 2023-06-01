import React, { useContext } from 'react'

//icons
import { AiFillCloseCircle } from 'react-icons/ai'
import { RiEditCircleFill } from 'react-icons/ri'

//context
import { context } from '../context/Context'

const Cards = ({ className }) => {
  const { todos, deleteTodo, id, setId, editTodo, goToEditMode } =
    useContext(context)

  return (
    <div
      className={`${className} grid grid-cols-12 gap-6 absolute top-[20rem] px-5 lg:px-0 lg:w-[65rem]`}
    >
      {todos.map((i) => (
        <div className='col-span-12 md:col-span-6'>
          <div className='w-full bg-white bg-opacity-70 flex gap-3 flex-col p-5 rounded-xl'>
            <div className='flex justify-between'>
              <h2 className='text-lg'>{i.title}</h2>
              <div className='flex gap-2'>
                <RiEditCircleFill
                  onClick={() => goToEditMode({ todo: i })}
                  className='text-2xl text-[#2AB1CE] opacity-80 hover:opacity-100 cursor-pointer  '
                />
                <AiFillCloseCircle
                  onClick={() => deleteTodo({ id: i.id })}
                  className='text-2xl text-[#D01010] opacity-80 hover:opacity-100 cursor-pointer  '
                />
              </div>
            </div>
            <p className='text-sm opacity-75'>{i.des}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
