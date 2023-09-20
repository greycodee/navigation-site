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
  // before:w-[356px] before:h-[96px] before:absolute before:top-[2px] before:left-[2px] before:bg-black before:rounded-xl before:z-20 


  return (
    <>
    <div className=" min-w-[18rem] p-4 mt-4 flex justify-center items-center">
      <div className="w-[340px] h-[100px] relative rounded-xl z-0 overflow-hidden
      after:w-[500px] after:h-[500px] after:absolute after:top-[-200px] after:left-[-50px] 
      after:bg-gradient-to-bl after:from-neutral-800 after:via-indigo-500 after:to-pink-700
      after:z-10 after:animate-spin-slow 
      ">
        <div className="absolute top-[2px] left-[2px] h-[96px] w-[336px]
          bg-black rounded-xl z-20 
          flex flex-col justify-center items-center
        ">
          <div className=" text-2xl font-bold text-center leading-tight
          bg-gradient-to-bl from-neutral-800 via-indigo-500 to-pink-700 text-transparent bg-clip-text
          ">Michael&apos; Navigation</div>
          <div className=" text-sm text-center text-gray-500 leading-tight
          bg-gradient-to-bl from-neutral-800 via-indigo-500 to-pink-700 text-transparent bg-clip-text
          ">A simple navigation page for Michael&apos;s daily use.</div>
        </div>
        
      </div>
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
