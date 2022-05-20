export async function getMoviesById(id){
    const res = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=c0ad6b8f`);
    return await res.json();
}