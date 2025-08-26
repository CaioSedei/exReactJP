import './style.css'

function Imagens() {
    return (<section>
        <h2>Imagens e vídeos</h2>
        <h3>Imagens</h3>
        <figure>
            <img src="https://i.redd.it/dvj2x3qmps441.jpg" alt="Image de um cachorro sovietico" width="300" height="200" />
        </figure>
        <h3>Vídeos</h3>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/qigIYJWsyWE?si=VNh2i6JjVnfRF6eD"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>)
}


export default Imagens