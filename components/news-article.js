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
                .container{
                  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                  padding:2px 16px;
                }
                .container:hover {
                  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                }
            </style>
            <div class="container">
              <a href="${article.url}" rel="noopener" target="_blank">
                  <h2>${article.title}</h2>
                  <img src="${article.urlToImage || ""}" alt="${article.title}">
                  <p>${article.description || ""}</p>
              </a>
            </div>`;
  }
}

customElements.define("news-article", NewsArticle);
