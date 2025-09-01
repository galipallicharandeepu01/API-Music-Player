document.addEventListener("DOMContentLoaded", function () {
    const songButtons = document.querySelectorAll(".song-btn");
    const playerContainer = document.getElementById("player-container");

    songButtons.forEach(button => {
        button.addEventListener("click", function () {
            const songUrl = this.getAttribute("data-url");
            playerContainer.innerHTML = `
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=${songUrl}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                </iframe>
            `;
        });
    });
});
