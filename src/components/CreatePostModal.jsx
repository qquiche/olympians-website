import React, {useState, useEffect} from 'react'
import InputPill from './InputPill'

const CreatePostModal = ({setShow, handler}) => {

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const handleSubmit = () => {
      handler(author, title, content);
      setShow(false);
    }

    return (
        <div className="w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto ">
            <div className="mt-7 opacity-100 duration-500 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl ">
                    <div className="flex justify-between items-center py-3 px-4 border-blue-400 border-b-2 border-dotted">
                        <div className='w-7'/>
                        <h3 className=" text-3xl font-bold text-gray-800">
                            Create Post
                        </h3>
                        <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" onClick={() => setShow(false)} >
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto">
                        <InputPill title="What's Your Name?" placeholder="Ethan Benson" setState={setAuthor} inputType="text"/>
                        <InputPill title="Post Title" placeholder="Interesting Facts About Zeus" setState={setTitle} inputType="text"/>
                        <label className="block text-lg mb-2 font-semibold">Post Content</label>
                        <textarea className=" bg-gray-200 border border-gray-400 py-3 px-4 block w-full  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " rows="3" placeholder="Zeus is really interesting because..." onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " onClick={() => setShow(false)}>
                            Close
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePostModal