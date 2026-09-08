function Button() {
    let count = 0;
    const handleClick = (e) => {
        // if(count < 3) {
        //     console.log(`${name} you clicked me ${count} times`);
        //     count++;
        // } else {
        //     console.log(`${name} stop clicking me`)
        // }
        e.target.textContent = "OUCH! 😖"
    } 
    return(
        <>
        <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
        </>
    )
}
export default Button;