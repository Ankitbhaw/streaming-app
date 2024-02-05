/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { COMMENT_URL } from "../utils/constants";


export default function Comments({id}) {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        getComments();
    },[]);
    const getComments=async()=>{
        if(id){
        const data = await fetch(COMMENT_URL+id);
        const json = await data.json();
       setComments(json.items);
        }
    }
    if(!id)return null;
  return (
    <div>
        <div className="text-[20px] font-bold mt-6 ">
           {comments?.length} Comments
        </div>
        {comments?.map((comment) =>(
            <div key={comment?.id} className="flex my-14 gap-6 items-center mr-20">
                <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="image"  className="rounded-full"/>
                <div className="text-[14px]">
                    <div className="font-semibold">
                {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</div>
                <div className="mt-2 text-justify">{comment?.snippet?.topLevelComment?.snippet?.textDisplay}</div></div>
            </div>
        ))}
    </div>
  )
}
