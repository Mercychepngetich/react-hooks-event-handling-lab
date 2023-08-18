// Code Keypad Component Here

function Keypad (){
    function keypad(event){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={keypad}/>
        </div>
    )
}

export default Keypad;