import React, { useContext } from 'react'

//icons
import { BsChevronCompactDown } from 'react-icons/bs'

//context
import { context } from '../context/Context'

const Form = ({ className }) => {
  const {
    setCreateMode,
    title,
    setTitle,
    des,
    setDes,
    createTodo,
    editTodo,
    goToEditMode,
    editMode,
  } = useContext(context)

  return (
    <div
      className={`${className}  bg-gradient-to-r from-[#9c78ff80] 
    to-[#e47aff80] p-10 pb-2 xl:w-[40rem]  md:rounded-b-2xl w-full md:w-[30rem]`}
    >
      <div className='flex flex-col items-center gap-2'>
        <form
          action=''
          onSubmit={(e) => {
            e.preventDefault()
            if (editMode) {
              editTodo()
            } else {
              createTodo()
            }
          }}
          className='w-full grid grid-cols-12 gap-5'
        >
          <input
            type='text'
            id='title'
            class='col-span-12 md:col-span-9 focus:outline-none border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5 bg-white '
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button
            type='submit'
            className=' hidden md:block col-span-3 bg-[#21A656] shadow-md  py-3 rounded-lg text-white'
          >
            {editMode ? 'edit' : 'create'}
          </button>
          <textarea
            rows={4}
            class='col-span-12 focus:outline-none border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5 bg-white '
            placeholder='description'
            onChange={(e) => setDes(e.target.value)}
            value={des}
          />
          <button
            type='submit'
            className=' block md:hidden col-span-12 bg-[#21A656] shadow-md  py-3 rounded-lg text-white'
          >
            {editMode ? 'edit' : 'create'}
          </button>
        </form>

        <BsChevronCompactDown
          onClick={() => setCreateMode((c) => !c)}
          className='text-3xl text-white cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Form
