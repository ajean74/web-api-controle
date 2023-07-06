// Importe FileSystem 
const filesystem = require('fs');

const readFile = (req, res) => {
  // Indique le chemin vers le fichier a lire
  const chemin = '../question3.txt';

  // Permet de lire le fichier et de retourner une erreur s'il y en a une
  filesystem.readFile(chemin, 'utf8', (erreur, fichier) => {
    if (erreur) {
      console.error('Erreur lors de la lecture du fichier :', erreur);
      return res.status(500).json({ message: 'Erreur lors de la lecture du fichier' });
    }
    // Affiche le contenue du fichier
    res.render('index', { contenu: fichier });
  });
};

module.exports = { readFile };