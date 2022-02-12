function Footer() {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-800'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Assistance</h5>
        <p>Centre d'aide</p>
        <p>Informations de sécurité</p>
        <p>Options d'annulation</p>
        <p>Soutenir les personnes en situation de handicap</p>
        <p>Signaler un problème de voisinage</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Communauté</h5>
        <p>Airbnb.org : réponse aux catastrophes</p>
        <p>Nos mesures face au Covid-19</p>
        <p>Lutte contre la discrimination</p>
        <p>Soutenir les réfugiés afghans</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Accueil de voyageurs</h5>
        <p>Devenir hôte</p>
        <p>AirCover : protection hôtes</p>
        <p>Ressources pour les hôtes</p>
        <p>Forum de la communauté</p>
      </div>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>À propos</h5>
        <p>Newsroom</p>
        <p>En savoir plus sur les nouveautés</p>
        <p>Lettre de nos fondateurs</p>
        <p>Carrières</p>
        <p>Investisseurs</p>
      </div>
    </footer>
  )
}

export default Footer
