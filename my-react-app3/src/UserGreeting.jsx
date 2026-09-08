
function UserGreeting(props) {
    // if(props.isLoggedIn) {
    //     return(<>
    //     <h1>Welcome {props.username}</h1></>)
    // } else {
    //     return(<><p>Please Login to continue</p></>)
    // }

    return(<>{props.isLoggedIn ? <h1>Welcome {props.username}</h1>:<h2>Please Login</h2>}</>)
}
export default UserGreeting