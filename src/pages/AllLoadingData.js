export const AllLoadingData = (loadDepend, articles, imgs, captions, publishedAt, urls)=>{

   if(!loadDepend){
    for (let i=0; i<articles.length; i++){
        imgs.push(articles[i].urlToImage) 
        captions.push(articles[i].title)
        publishedAt.push(articles[i].publishedAt)
        urls.push(articles[i].url)
    } 
   }
}