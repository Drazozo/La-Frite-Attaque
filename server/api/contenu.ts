export default defineEventHandler(async (event) => {
  try {
    const { ville, categorie } = getQuery(event)

    const mysql = await import('mysql2/promise')

    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: 'lafriteattaque',
      password: 'lafriteattaque24',
      database: 'lafriteattaque'
    })

    const [rowsVille] = await connection.execute('SELECT * FROM local_villes WHERE LOWER(ville) = ?', [ville])
    const [rowsCat] = await connection.execute('SELECT * FROM event_categories WHERE LOWER(nom) = ?', [categorie])

    if (!rowsVille.length || !rowsCat.length) return { erreur: 'Ville ou catégorie introuvable' }

    const villeData = rowsVille[0]
    const catData = rowsCat[0]

    const [liens] = await connection.execute(
      'SELECT * FROM ville_event_link WHERE ville_id = ? AND category_id = ?',
      [villeData.id, catData.id]
    )

    if (!liens.length) return { erreur: 'Lien inexistant entre cette ville et cette catégorie' }

    const [textes] = await connection.execute(
      'SELECT texte_contenu FROM event_textes WHERE category_id = ? ORDER BY RAND() LIMIT 1',
      [catData.id]
    )

    const texteRaw = textes[0]?.texte_contenu || ''
    const texteFinal = texteRaw
      .replace(/{ville}/g, villeData.ville)
      .replace(/{departement}/g, villeData.departement)
      .replace(/{categorie}/g, catData.nom)

    return {
      ville: villeData.ville,
      departement: villeData.departement,
      categorie: catData.nom,
      texte: texteFinal
    }

  } catch (error) {
    console.error('❌ ERREUR API /contenu.ts :', error)
    return { erreur: 'Erreur serveur', details: error.message }
  }
})
