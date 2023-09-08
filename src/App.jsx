import Card from "./components/Card";
import data from "./data/data";
import { useState } from "react";
function App() {
  const [cards, setCards] = useState(data);

  return (
    <>
      {cards.map((card) => (
        <div key={card.cate} className="p-4">
          <h2 className=" font-bold text-lg">{card.cate}</h2>
          <div className="grid 
          grid-cols-1 
          2xl:grid-cols-5
          xl:grid-cols-4
          lg:grid-cols-3
          md:grid-cols-2
          grid-flow-row auto-rows-max gap-4 mt-4">
            {card.urls.map((url) => (
              <a key={url.url} href={url.url}>
                <Card
                  icon={url.icon}
                  title={url.title}
                  desc={url.desc}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
