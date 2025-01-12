import { useState ,useEffect} from "react"

export default function Textform(props){

    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');

    }
    const handleLoClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success');

    }
    const handleClearText=()=>{
     
        let newText=("");
        setText(newText);
        props.showAlert('Text cleared','success');

    }
    const handleOnChange=(e)=>{
        
        setText(e.target.value);
    }
    const handleRemoveExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed','success');
    }



    const[text,setText]=useState("");
    const [count,setCount]=useState(0);

    // useEffect(()=>{
    //     document.title=`count:${count};`
    //     console.log(text);

    // },[text]);
 
    





    return(
        <>
        
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="form-floating">
            <textarea style={{height:150,width:800}} className="form-control"value={text} onChange={handleOnChange}  id="floatingTextarea"></textarea>
            
</div>
     <button className="btn btn-primary my-3 mx-2"onClick={handleUpClick} >Convert to uppercase</button>
     <button className="btn btn-primary my-3 mx-2"onClick={handleLoClick} >Convert to lowercase</button>
     <button className="btn btn-primary my-3 mx-2"onClick={handleClearText} >ClearText</button>
     <button className="btn btn-primary my-3 mx-2"onClick={handleRemoveExtraSpaces} >Remove extra spaces</button>

     <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 >Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview."}</p>
     </div>
        </div>
        </>
    )
}

