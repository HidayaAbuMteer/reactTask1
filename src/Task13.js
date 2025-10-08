import"./task13.css";
export default function Task13({ cards }) {
  return (
        <div className="cards">
            {cards.map((card,index) => (
                <div className="card" key={index}>
                    <img src={card.photo} alt={card.title} width={"100px"}/>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </div>
               
              ))}
        </div>
 

  );
}
