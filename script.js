
const input = document.getElementById("input-mood");
const btn = document.getElementById("play-btn");

btn.addEventListener("click", function () {
    const mood = input.value;
    uri = encodeURIComponent(mood);

    // const search = `https://open.spotify.com/episode/7makk4oTQel546B0PZlDM5`
    const search = `https://open.spotify.com/embed/search/${uri}`;

    const result = document.getElementById("result");

    document.body.innerHTML = `
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/album/43ehHE4nhmYH976HupqUlx?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `

})

