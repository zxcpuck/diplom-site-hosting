const newsTitles = document.querySelectorAll('.news-title');
const newsContents = document.querySelectorAll('.news-content');
const toggleBtn = document.querySelector('.toggle-btn');

newsTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        newsContents[index].style.display = newsContents[index].style.display === 'none' || !newsContents[index].style.display
            ? 'block'
            : 'none';
    });
});

toggleBtn.addEventListener('click', () => {
    const areAllVisible = Array.from(newsContents).every(content => content.style.display === 'block');
    newsContents.forEach(content => content.style.display = areAllVisible ? 'none' : 'block');
    toggleBtn.textContent = areAllVisible ? 'Показати всі новини' : 'Сховати всі новини';
});