import Card from "./components/Card";
import data from "./data/data";
import { useState } from "react";
function App() {
  const [cards, setCards] = useState(data);

  function generateAvatar(name, size) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, size, size);
    ctx.font = `${size / 2}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#333';
    ctx.fillText(name.substr(0, 1), size / 2, size / 2);
    return canvas.toDataURL();
  }
  

  return (
    <>
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mt-4">Michael&apos; Navigation</h1>
      <p className="text-center text-gray-500">A simple navigation page for Michael&apos;s daily use.</p>
    </div>
    <div>
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
            {card.urls.map((url) => {
              let iconUrl = url.icon;
              if (!url.icon.startsWith("http") && !url.icon.startsWith("https")) {
                iconUrl = generateAvatar(url.icon, 50)
              }
              return (
                <a key={url.url} href={url.url}>
                  <Card
                    icon={iconUrl}
                    title={url.title}
                    desc={url.desc}
                  />
                </a>
              )
            })}
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default App;
