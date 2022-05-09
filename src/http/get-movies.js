export async function getMovies(){
    const res = await fetch("http://www.omdbapi.com/?s=batman&apikey=c0ad6b8f");
    return await res.json();
}