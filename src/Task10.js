export default function Task10({ items }) {
    return(
        <ul>{
            items.map((item,index)=> (
            <li 
                key={index} 
                style={{
                    backgroundColor:"blue",color:"white",
                    margin:"2px",
                    padding:"2px",
                    width:"50%"
                }}>
                    {item}
            </li>
        ))}
        </ul>
        );
}