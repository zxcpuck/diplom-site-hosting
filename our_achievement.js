document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("clientCounter");
    let count = 0;

    const updateCounter = () => {
        if (count < 10000) {
            count += Math.floor(Math.random() * 125);
            counterElement.textContent = count.toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.textContent = "10.000+";
        }
    };

    updateCounter();
});