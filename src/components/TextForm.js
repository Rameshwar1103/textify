import React,{useState,useEffect} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    // Handler function to convert text to uppercase
    const handleUpClick = () =>
    {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase","success");
    }
    // Handler function to convert text to Lowercase
    const handleLoClick = () =>
        {
          setText(text.toLowerCase());
          props.showAlert("Converted to LowerCase","success");
        }
    // Handler function to convert text to First letter capital
    const handleCapClick = () =>
        {    let prev = " ";
             var newText ="";
          for(let i=0;i<text.length;i++)
            {
                if(prev === " ")
                    {
                       newText+= text[i].toUpperCase();
                    }
                else{
                    newText += text[i];
                }
                prev = text[i];
            } 
            setText(newText);
            props.showAlert("First letter of words Capitalized","success");
        }
    // Handler Function for clear text
    const handleClearClick = () =>
        {
          setText("");
          props.showAlert("Text Cleared","success");
        }
    //Handler Function for inverse every character
    const handleInverseClick = () =>
        {
          let newText = "";
          for(let i=0;i<text.length;i++)
            {
                if(text[i] === text[i].toUpperCase())
                    newText += text[i].toLowerCase();
                else
                    newText += text[i].toUpperCase();
            }
            setText(newText);
            props.showAlert("Text is Inverted","success");
        }
    //Handler Function for Alternating text
    const handleAlterClick = () =>
        {
          let newText ="";
          for(let i=0;i<text.length;i++)
            {   if(i%2 == 0)
                newText += text[i].toLowerCase();
                else
                newText+= text[i].toUpperCase();
            }
            setText(newText);
            props.showAlert("Text is Altered","success");
        }
    // handler function for copy
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard","success");
    }
    // handler function for remove extra spaces
    const handleRemExtSpaceClick =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success");
    }
    // Function to reverse the text
    const  handleReverseText  = () => {
    const reversed = text.split('').reverse().join('');
    setText(reversed);
    props.showAlert("Text is Reversed","success");
    };

    // Function to convert text with new lines after periods
    const handleSeparateStatement = () => {
    const converted = text.split('.').join('.\n');
    setText(converted);
    props.showAlert("Text is Seperated","success");
    };
    // Handler function to update text state when the textarea value changes
    const handleOnChange = (evt)=>
        {   console.log("oldtext",text);
             console.log("This is handleonchn",evt.target.value);
           setText(evt.target.value);
        }
    // Function to count the number of words in the text
    const countWords = ()=>{
        let trimmedText = text.trim();// Remove leading/trailing spaces
        if(trimmedText === "")
        return 0;                    // if string is empty 
        else
        return trimmedText.split(" ").length; //Split the text by spaces and return the length of the resulting array
    }
   // Using useEffect to show an alert when the text changes
  useEffect(() => {
    if (text.trim() === '') {
      props.showAlert("Write some text", 'warning');
    }
  }, [text, props]);
    

    return (
    <div className='container' style={{color:props.style.color,backgroundColor:props.body.backgroundColor}}>
        <h1>Enter the Text to analyze</h1>
        <div className="mybox">
        <textarea className="form-control" value={text} style={{backgroundColor : props.style.backgroundColor==="white"?"#c1bfbf":"white"}} onChange={handleOnChange} cursor ="pointer" id="text" rows="8"></textarea>
        <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick} >Convert To Upper Case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleLoClick} >Convert To Lower Case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleCapClick} >Convert To Capital Case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleAlterClick} >Convert To Alternate Case</button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleInverseClick} >Inverse Text </button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleClearClick} >Clear Text </button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleCopyClick} >Copy to clipboard </button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleRemExtSpaceClick} >Remove Extra Spaces </button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleReverseText} >Reverse Text </button>
        <button className='btn btn-primary my-2 mx-2' onClick={handleSeparateStatement} >Separate statements </button>
        </div>
        <div my-3>
          <h2>Text Summary</h2>
          <p>{countWords()} words and {text.length}characters</p>
          <p>{0.008*countWords()}Min read</p>
          <h2>Text preview</h2>
          <p>{text.trim() === '' ? 'Write some text' : text}</p>
{/* empty string use nahi ho pa raha hai kyunki agar use kare to page pe error aa rahe hai */}
        </div>
    </div>
  )
}
