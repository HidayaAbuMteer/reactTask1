export default function Task9({ items }) {
    return(
        <ul>{
            items.map((student,index)=> (<li key={index} style={{textAlign:"left"}}>{student}</li>
        ))}
        </ul>
        );
}