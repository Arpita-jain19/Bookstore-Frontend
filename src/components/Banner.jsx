import React from 'react'

export default function Banner() {
    return (
        <>

            <div className='max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello,Welcomes here to learn something <span className='text-pink-500'>
                            new everyday!!!</span></h1>
                        <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque odio enim necessitatibus natus libero quasi, ut quos eos quidem hic!</p>
                        <label className="input input-bordered flex items-center gap-2 bg-white">
                            Email
                            <input type="text" className="grow" placeholder="daisy@site.com" />
                        </label>
                        
                    </div>
                    <button className="btn btn-secondary  bg-pink-500 mt-6 text-white">Submit</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <img className='my-20' src="https://img.freepik.com/premium-photo/books-isolated-white_93675-8475.jpg?w=996" alt="" />
                </div>
               
            </div>

        </>
    )
}
