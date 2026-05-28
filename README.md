# 🚀 Twelve Project - Démo & Exercices DOM

Le projet **Twelve Project** est un ensemble de 12 petits projets pratiques conçus pour maîtriser la manipulation du DOM en JavaScript. 
---

## 📌 Pré-requis

Ces exercices sont intimement liés au cours sur le **DOM (Document Object Model)**.
 Pour les réaliser, vous devrez interagir en JavaScript avec :
- **Le contenu HTML** (modification de texte, ajout de balises enfants).
- **Les attributs HTML** (`src`, `href`, `class`, `id`, `data-*`).
- **Les événements** (`click`, `scroll`, `submit`, `keyup`, etc.).

---

## ⚙️ Installation et Lancement

> 🔗 *Template d'origine : [CDPI DWWM P2 - Twelve Project](https://github.com/CHAOUCHI/cdpi-dwwm-p2-module-js-dom-twelve-projet)*

Pour visualiser et travailler sur les projets, choisissez **l'une des deux méthodes** ci-dessous :

### Option 1 : Lancement local (Sans Docker)

Cette méthode utilise le serveur web natif de Python pour lire les fichiers directement depuis votre dossier local.

1. Ouvrez votre terminal dans le dossier du projet cloné.
2. Démarrez le serveur Python avec la commande suivante :
   ```bash
   python3 -m http.server 1212
```

3. Rendez-vous sur [http://localhost:1212](http://localhost:1212) pour accéder à l'arborescence de vos projets.

### Option 2 : Lancement conteneurisé (Avec Docker)

Si vous préférez utiliser Docker (ou pour visualiser la version de production finale), vous pouvez lancer le projet dans un conteneur isolé.

1. **Premier lancement (Création et exécution du conteneur) :**
```bash
docker run -d -p 1212:80 --name twelve-project chaouchi/twelve-prod
```

*(Note : L'option `-d` est ajoutée pour lancer le conteneur en arrière-plan et libérer votre terminal).*
2. **Accès au projet :**
Ouvrez votre navigateur et allez sur [http://localhost:1212](http://localhost:1212)
3. **Redémarrage ultérieur :**
Si vous redémarrez votre ordinateur ou fermez Docker, le conteneur s'arrêtera. Ne réutilisez pas la commande `run`, faites simplement un `start` :
```bash
docker start twelve-project
```

## 🛠️ Commandes Docker utiles (Aide-mémoire)

Au besoin, voici les commandes pour gérer votre conteneur :

- **Arrêter le conteneur :** `docker stop twelve-project`
- **Relancer le conteneur :** `docker start twelve-project`
- **Supprimer le conteneur :** `docker rm -f twelve-project`