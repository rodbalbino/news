class NewsArticle extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  /**
   * @param {{ url: any; title: any; urlToImage: any; description: any; }} article
   */
  set article(article) {
    this.root.innerHTML = `
            <style>
                h2 {
                
                 font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI";

                }
                a,
                a:visited {
                    text-decoration: none;
                    color: inherit;
                }
                img {
                    width: 100%;
                }
                
                @media screen and (max-width: 600px) {
                  .container{
                    padding: 0 20px;
                  }
                }
   
            </style>
            <div class="container">
                <a href="${article.url}" target="_blank">
                    <h2>${article.title}</h2>
                    <img src="${article.urlToImage || ""}" alt="${
      article.title
    }">
                    <p>${article.description || ""}</p>
                </a>
              </div>`;
  }
}

customElements.define("news-article", NewsArticle);
