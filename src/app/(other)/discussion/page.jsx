"use client";
import React, { useState, useEffect } from 'react';
import { HiHome } from "react-icons/hi";
import { useRouter } from "next/navigation";
import CreatePostModal from '@/components/CreatePostModal';
import Card from '@/components/Card';

const Discussion = () => {
    const [posts, setPosts] = useState([]);
    const [update, setUpdate] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    useEffect(() => {
        fetch("/data/posts.json").then((res) => res.json()).then((data) => setPosts(data));
    }, [])

    const createPost = (author, title, content) => {
        setPosts([...posts, {author: author, title: title, content: content}]);
        setUpdate(update + 1);
    }

  return (
    <div className=' min-h-screen bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200'>
        <div className={`h-full w-full flex-col justify-between ${showModal ? "blur-md" : ""}`} >
            <div className="h-full w-full flex justify-between flex-col items-center">
                <div className="px-7 py-5 w-full flex justify-between">
                    <p className=" text-5xl text-red-900 font-semibold text-right " >Discussion Board</p>
                    <p className=" text-2xl text-red-900 font-semibold cursor-pointer text-right hover:scale-125 transition" onClick={() => router.push("/")}><HiHome size={50}/></p>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center px-3">
                    <button type="button" className="py-3 px-4 my-8 inline-flex items-center gap-x-2 text-4xl font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 " onClick={() => setShowModal(true)}>
                        Create Post
                    </button>
                    <div className="grid grid-cols-3 gap-4">
                        {posts.map((post) => <Card key={post.title} title={post.title} author={"Author: " + post.author} content={post.content}/>)}
                    </div>
                </div>
                <h3 className=" text-red-900 font-bold py-4 text-center text-lg">Created for CC303 by Surya Sunkari and Ethan Benson</h3>
            </div>
        </div>
        {showModal ? <CreatePostModal setShow={setShowModal} handler={createPost}/> : null}
        
    </div>
    
  )
}

export default Discussion