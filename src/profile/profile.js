

const Element=({fullName, bio, profession})=>{
  return (
       <div>
           <span>Full Name : {fullName}</span>
           <br/>
          <span>Bio : {bio}</span>
          <br/>
          <span> Profession : {profession}</span>
          <br/>
          <button onClick={()=>alert(`Hello from ${fullName}`)} >Welcome</button>
       </div>

    )
}
Element.defaultProps={
    fullName : "Jalel",
    bio : "veeeery motivated",
    profession : ""
}
Element.PropsTypes={
    fullName : Object,
    bio : Object,
    profession : Object,
}
export default Element