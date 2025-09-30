import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import prism from 'prismjs';
import Editor from 'react-simple-code-editor';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import axios from 'axios';
import './App.css'

function App() {
  const [code, setCode] = useState(`enter your code here`)
  const [review,setReview]=useState(``);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    prism.highlightAll();
  },[])

  async function handleClickButton(){
    setLoading(true);
    const response=await axios.post('https://devgpt-pt3u.onrender.com/ai/get-review',{code});
    setReview(response.data);
    setLoading(false);
    console.log(response.data);
  }
    return (
    <>
    <main>
      <div className='left'>
        <div className="code">
         <Editor
  value={code}
  onValueChange={code => setCode(code)}
  highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
  padding={10}
  style={{
    fontFamily: '"Fira code", "Fira Mono", monospace',
    border: "1px solid #ddd",
    borderRadius: "5px",
    minHeight: "100%",    // Changed from height to minHeight
    fontSize: "1.25rem",
    width: "100%",
    overflow: "auto",     // Added
    backgroundColor: "#2c2b2b", // Added
    color: "#fff"         // Added for better visibility
  }}
/>
        </div>
        
        <div className='review' onClick={handleClickButton} disabled={loading}>{loading ? "Loading..." : "Review"}</div>
      </div>
      <div className='right'>
        <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
      </div>
    </main>
    </>
  )
}

export default App
