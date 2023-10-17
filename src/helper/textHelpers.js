export function truncateSynopsis(synopsis, wordLimit){
    if(!synopsis) {
      return '';
    }
  
    const words = synopsis.split(" ");
  
    if(words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + "..."
    }
  
    return synopsis;
}