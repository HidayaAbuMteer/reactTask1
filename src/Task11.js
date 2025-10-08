export default function Task10({ items }) {
    return(
        <ul>{
            items.map((item,index)=> (
            <li 
                key={index} >
                   <span
                    style={{backgroundColor:"yellow"}}>
                        Double
                        </span>
                        number {item} is {item+=item}
            </li>
        ))}
        </ul>
        );
}
