import React, { useState } from 'react';
import AddArticle from './AddArticle';
const Article = props => {
    return (
        <div class="article-list">
            {props.articlesList && props.articlesList.map((article, index) =>
                <div className="article" article={article} key={index} />


            )}
        </div>

    )
}


export default Article;
// import React, { useState } from 'react';

// import './App.css';

// import AddArticle from './components/AddArticle';
// import Article from './components/Article';

// const  App = props =>{
//    const [articles, setArticles] = useState([{
//         author: 'James Stevens', title: 'My Research Paper', category: 'Business', url: 'https://abc.com'
//     }, { author: 'Jessica Parker', title: 'The HealthInsider', category: 'Health', url: 'https://abc.com' },
//     { author: 'Sammy Williams', title: 'The Psychologist and ME', category: 'Health', url: 'https://abc.com' }
//     ])
//     const addNewArticle = article => {
//         setArticles([...articles, article])
//         console.log(article)

//     }

// console.log(articles)
//     return (
//       <div className="App">
//       <header>

//         <AddArticle  addNewArticle={addNewArticle} />
//       </header>
//       <main>
//       {articles.map(article =>{
//         return(
//           <div key={article.author}>
//           <h1> author:  {article.author}</h1>
//           <p>title:{article.title}</p>
//           <p>category:{article.category}</p>
//           <p>url:{article.url}</p>
//           </div>

//         )
//       })}
//       </main>

//       </div>
//     );
//   }


// export default App;
