document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.getElementById("articles-container");
    if (articlesContainer) {
        const articles = [
            { title: "اقبح فتاة بالعالم", description: "من هي اقبح فتاة؟", date: "March 2025", link: "articles.html" },
            { title: "Big Data Analytics", description: "The power of analyzing massive datasets.", date: "April 2025", link: "#" },
            { title: "Machine Learning Basics", description: "Getting started with ML.", date: "May 2025", link: "#" }
        ];
    
        articles.forEach(article => {
            const articleElement = document.createElement("div");
            articleElement.classList.add("article-card");
            articleElement.innerHTML = `
                <h2><a href="${article.link}">${article.title}</a></h2>
                <p>${article.description}</p>
                <small class="article-date">Published: ${article.date}</small>
            `;
            articlesContainer.appendChild(articleElement);
        });
    }
});
