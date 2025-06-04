function insertShortcut(text) {
  document.getElementById("userInput").value = text;
  document.getElementById("userInput").focus();
}


const useFallback = false; // ⬅️ Change à true pour réactiver le mode gratuit


const fallbackAnswers = {
  "C'est quoi La Station Production ?": `
La Station est une agence audiovisuelle basée à Rennes, fondée par trois passionnés d’image. Ils accompagnent les entreprises dans la création de contenus vidéo originaux et impactants. Leur équipe réunit des cadreurs, ingénieurs son, monteurs, animateurs 3D, pour une prise en charge complète du projet.
`,
  "Quels types de services proposez-vous ?": `
<strong>Nous proposons les types de vidéos suivants :</strong><br><br>
• <strong>Reportage</strong> : immersion dans votre activité ou vos événements, captation authentique et dynamique<br>
• <strong>Publicité</strong> : vidéos courtes à fort impact, storytelling visuel, formats adaptés aux réseaux<br>
• <strong>Réseaux sociaux</strong> : formats dynamiques pour TikTok, Instagram, LinkedIn<br>
• <strong>Autres</strong> : présentation de produit, aftermovie, captation live, formations & tutos
`,
  "Quels sont vos tarifs ?": `
<strong>Tarifs indicatifs :</strong><br><br>
• Film d’entreprise : 2 000 € – 10 000 €<br>
• Interview : 500 € – 2 500 €<br>
• Reportage : 1 500 € – 5 000 €<br>
• Publicité : 1 000 € – 20 000 €<br>
• Réseaux sociaux : 300 € – 2 000 €<br>
• Présentation produit : 700 € – 5 000 €<br>
• Aftermovie : 700 € – 6 000 €<br>
• Captation live : 1 000 € – 15 000 €<br>
• Formations / tutos : 800 € – 5 000 €<br>
• Tarif horaire vidéaste : 55 € / heure
`,
  "contact ?": `
<strong>Contact :</strong><br>
Téléphone : 07 80 83 37 44<br>
Instagram : <a href="https://instagram.com/lastation.prod" target="_blank">@Lastation.prod</a><br>
Email : <a href="mailto:contact@lastation-prod.com">contact@lastation-prod.com</a><br><br>

`,
  "Proposez-vous des abonnements ?": `
<strong>Formules d'abonnement :</strong><br><br>
• Essentiel : 590 €/mois → 1 vidéo courte/mois<br>
• Station : 1 290 €/mois → 2 vidéos/mois + stratégie<br>
• Premium : 2 490 €/mois → 4 vidéos/mois avec équipe dédiée<br>
• Sur-Mesure : plan personnalisé sur devis
`,
  "Quel matériel utilisez-vous ?": `
<strong>Matériel utilisé :</strong><br><br>
• Caméra : Sony FX3<br>
• Objectifs : 50mm, 14–30mm, 28–75mm, 70–300mm<br>
• Accessoires : Ronin-RS3 Pro, Dédolight, Pavotube, etc.<br>
• Logiciel : DaVinci Resolve Studio
`
};

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const loader = document.getElementById("loader");

  const message = input.value.trim();

  if (!message) return;

  let fallback = fallbackAnswers[message];

if (useFallback && fallback) {
  const parsedFallback = marked.parse(fallback);
  chatbox.innerHTML = "";
  typeWriterHTML(chatbox, parsedFallback);
  input.value = "";
  return;
}
  // Sinon : appel API
  loader.style.display = "block";
  input.disabled = true;

  try {
    const res = await fetch("https://chatbot-o4gm.onrender.com/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message })
    });

    const data = await res.json();
    const raw = data?.answer?.content;

    if (raw) {
      const parsedHTML = marked.parse(raw);
      chatbox.innerHTML = "";
      typeWriterHTML(chatbox, parsedHTML);
    } else {
      chatbox.innerHTML = `<br><br>❌ Réponse vide.`;
    }
  } catch (err) {
    chatbox.innerHTML = `<br><br>❌ Erreur : impossible de contacter le serveur.`;
    console.error("Erreur de connexion ou de parsing :", err);
  } finally {
    input.value = "";
    input.disabled = false;
    loader.style.display = "none";
  }
}



function typeWriterHTML(container, html) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const wrapper = document.createElement("div");
  container.appendChild(wrapper);

  const nodes = Array.from(tempDiv.childNodes);
  let i = 0;

  function typeNode(node, parent, done) {
    if (node.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      parent.appendChild(span);
      let j = 0;
      const text = node.textContent;

      const interval = setInterval(() => {
        span.textContent += text[j];
        j++;
        if (j >= text.length) {
          clearInterval(interval);
          done();
        }
      }, 15);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      parent.appendChild(clone);
      const children = Array.from(node.childNodes);
      let k = 0;

      function nextChild() {
        if (k < children.length) {
          typeNode(children[k], clone, () => {
            k++;
            nextChild();
          });
        } else {
          done();
        }
      }

      nextChild();
    } else {
      done();
    }
  }

  function typeAll() {
    if (i < nodes.length) {
      typeNode(nodes[i], wrapper, () => {
        i++;
        typeAll();
      });
    }
  }

  typeAll();
}


document.getElementById("userInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});


async function askOnLoad() {
  const chatbox = document.getElementById("chatbox");
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  const message = "C'est quoi La Station Production ?";
  const fallback = fallbackAnswers[message];

if (useFallback && fallback) {
    const parsedHTML = marked.parse(fallback);
    chatbox.innerHTML = "";
    typeWriterHTML(chatbox, parsedHTML);
    loader.style.display = "none";
    return;
  }

  // Code de secours si jamais tu veux garder l'appel API en fallback secondaire :
  try {
    const res = await fetch("https://chatbot-o4gm.onrender.com/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message })
    });

    const data = await res.json();
    const raw = data?.answer?.content;

    if (raw) {
      const parsedHTML = marked.parse(raw);
      chatbox.innerHTML = "";
      typeWriterHTML(chatbox, parsedHTML);
    } else {
      chatbox.innerHTML = `<br><br>❌ Réponse vide.`;
    }
  } catch (err) {
    chatbox.innerHTML = `<br><br>❌ Erreur de chargement automatique.`;
    console.error(err);
  } finally {
    loader.style.display = "none";
  }
}




window.addEventListener("DOMContentLoaded", askOnLoad);

