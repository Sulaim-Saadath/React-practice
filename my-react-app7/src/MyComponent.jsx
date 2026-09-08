import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayement] = useState("")
  const [shipping, setShipping] = useState("");
  const handleInputChange = (e) => {
    setName(e.target.value)
  };
  const handleComment = (e) => {
     setComment(e.target.value);
  }
  const handlePayment = (e) => {
    setPayement(e.target.value)
  }

  return (
    <>
    <input type="text" onChange={handleInputChange} value={name} />
    <p>Name; {name}</p>
    <textarea value={comment} onChange={handleComment} placeholder="Enter address"></textarea>
    <p>Comment: {comment}</p>
    <select name="payment" id="payement"  onChange = {handlePayment}value={payment}>
        <option value="visa">Visa</option>
        <option value="MasterCard">MaterCard</option>
        <option value="paypal">Paypal</option>
    </select>
    <p>Payment: {payment}</p>
    </>
  )
}
export default MyComponent;
