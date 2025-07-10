export default function handler(req, res) {
  const dinos = [
    {
      name: "🦖 Fire Dino",
      image: "https://i.imgur.com/E9jVztw.png"
    },
    {
      name: "🦕 Leaf Dino",
      image: "https://i.imgur.com/tFXRUv9.png"
    },
    {
      name: "🐉 Mystery Dino",
      image: "https://i.imgur.com/F8EBM6a.png"
    }
  ];

  const chosen = dinos[Math.floor(Math.random() * dinos.length)];

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="${chosen.name} has hatched!" />
        <meta property="og:image" content="${chosen.image}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${chosen.image}" />
        <meta property="fc:frame:button:1" content="Hatch Again" />
        <meta property="fc:frame:post_url" content="https://egg-dino.vercel.app/api/hatch" />
      </head>
      <body>
        <h1>You got: ${chosen.name}</h1>
      </body>
    </html>
  `);
}
