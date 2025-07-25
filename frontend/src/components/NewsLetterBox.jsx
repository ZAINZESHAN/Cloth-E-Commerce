import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscibe now $ get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aut! Fugiat molestias repellat minus veritatis dolorum neque! Quia excepturi fugiat minima ab, eos laborum nam tenetur obcaecati sapiente voluptate temporibus!
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input type="email" className='w-full sm:flex outline-none' placeholder='Enter yor email' required />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
