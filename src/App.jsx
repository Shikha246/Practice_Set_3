import { useState } from "react";

export default function App(){

//Q1. Write a JavaScript function that returns a passed string with letters in alphabetical order. Assume punctuation, numbers and symbols are not included in the passed string.



function ChangeAlphabetically(){
const word ="Shikha";
const newWord =word.toLowerCase().split("").sort().join("");
return newWord;
}

//Q2. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function CheckVowel(){
    
    const [text,setText] = useState("");
    const [showVowelCount, setShowVowelCount] = useState(0);
    const handleSubmit=()=>{
        let count =0;
        let v=['a','e','i','o','u','A','E','I','O','U'];
        for(let i=0; i<text.length;i++){
    
    if(v.includes(text[i]))
    {
        count++;
    }
   
    }
    setShowVowelCount(count);
}  
    const handleText =(event)=>{
        setText(event.target.value);
        }

    
    return(
        <div>
            <input type="text" placeholder="Enter your text" onChange={handleText}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>{showVowelCount}</p>
        </div>
    )

}
//Q3. Write a JavaScript program to convert a specified number to an array of digits.
function ConvertNumToArray(){
const [num,setNum]= useState();
const [showNum,setShowNum]=useState([]);
const handleNumbers = (event) =>{
    setNum(event.target.value);
}
const handleSubmit= ()=>{
    let numArr =[];
    for(let i=0;i<num.length;i++){
        numArr.push(Number(num[i]));
    }
    setShowNum(numArr);
}
    return(
        <div>
            <input type="number" placeholder="Enter the numbers" onChange={handleNumbers}/>
            <button onClick={handleSubmit}>Submit</button>
            <p>{JSON.stringify(showNum)}</p>
        </div>
    )
}


//Q4. Create a promise. Have it resolved with a value of 'Resolved!' in resolve after a delay of 1000ms. Print the contents of the promise after the promise has been resolved.
function CreatedPromise(){
Promise.resolve(
    setTimeout(() => {
        console.log("Resolved!");
    }, 1000));
}


return(
    <>
<ChangeAlphabetically />
<CheckVowel />
<ConvertNumToArray />
<CreatedPromise />
</>
);
}