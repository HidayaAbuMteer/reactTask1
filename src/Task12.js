export default function Task12({ items }) {
  return (
    <div>
     
        <div className="card">
          <h3>Even Numbers</h3>
          <ul>
            {items
              .filter((num) => num % 2 === 0)
              .map((num, index) => (
                <li key={index}>{num}</li>
              ))}
          </ul>
        </div>
     
        <div className="card">
          <h3>Odd Numbers</h3>
          <ul>
            {items
              .filter((num) => num % 2 !== 0)
              .map((num, index) => (
                <li key={index}>{num}</li>
              ))}
          </ul>
        </div>
    
    </div>
  );
}