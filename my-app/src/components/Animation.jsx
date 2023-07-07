import React,{useState,useEffect} from 'react'

function Animation(){
  const [text, setText] = useState('ditsa');
  useEffect(() => {
    const interval = setInterval(() => {
      
      setText('mina');
    }, 2000); 
    
    return () => clearInterval(interval);
  }, []); 
  return (
    <div className='ani'>
      {text}
    </div>
  )
}

export default Animation