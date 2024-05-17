import React from 'react'
import { useState,useEffect } from 'react'
export default function HookMouse() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMousePosition=(e)=>{
        console.log("Mouse event")
        setY(e.clientY)
        setX(e.clientX)
    }
    useEffect(()=>{
        console.log("useEffect Called")
        window.addEventListener("mousemove",logMousePosition)
        return ()=>{
            window.removeEventListener("mousemove",logMousePosition)
        }
    },[])
  return (
    <div>
        Hooks X - {x}{"\n"}
        Hooks Y - {y}
    </div>
  )
}
