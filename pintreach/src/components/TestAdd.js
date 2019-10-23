import React, { useState } from 'react';



import AddArticle from './AddArticle';
import Article from './Article';

const  TestAdd = props =>{
    const [articles, setArticles] = useState([{
         author: 'James Stevens', title: 'My Research Paper', category: 'Business', url: 'https://abc.com'
     }, { author: 'Jessica Parker', title: 'The HealthInsider', category: 'Health', url: 'https://abc.com' },
     { author: 'Sammy Williams', title: 'The Psychologist and ME', category: 'Health', url: 'https://abc.com' }
     ])
     const addNewArticle = article => {
         setArticles([...articles, article])
         console.log(article)
 
     }
 
 console.log(articles)
     return (
       <div className="App">
       <header>
 
         <AddArticle  addNewArticle={addNewArticle} />
       </header>
       <main>
       {articles.map(article =>{
         return(
           <div key={article.author}>
           <h1> author:  {article.author}</h1>
           <p>title:{article.title}</p>
           <p>category:{article.category}</p>
           <p>url:{article.url}</p>
           </div>
 
         )
       })}
       </main>
 
       </div>
     );
   }
 
 
 
 
 export default TestAdd;