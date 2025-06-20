const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Mailjet = require("node-mailjet");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mailjetClient = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

app.post("/contact", async (req, res) => {
  const { name, email, message, need } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs requis manquants." });
  }

  try {
    const request = await mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MJ_SENDER,
              Name: "Formulaire Contact",
            },
            To: [
              {
                Email: process.env.MJ_RECIPIENT,
                Name: "Toi",
              },
            ],
            Subject: `Nouveau message de ${name}`,
            TextPart: `Email: ${email}\nBesoin: ${need}\n\nMessage:\n${
              message || "Aucun message fourni"
            }`,
          },
        ],
      });

    res.status(200).json({ success: true, message: "Message envoyé !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur en écoute sur le port ${PORT}`));
