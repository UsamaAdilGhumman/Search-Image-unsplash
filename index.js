async function getImage(word){
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=SnxG4ZFl3P8Dr6uFCd14xtYyhaEziYWSUqmscxOY034`;
    const res = await fetch(URL)
    const data  = await res.json();
    return data;
}
const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
console.log(input);

let word;
input.addEventListener('change',(e)=>{
    word = e.target.value;
})
const imageContainer = document.querySelector(".image-container");

const img = document.createElement('img');
imageContainer.append(img)
btn.addEventListener('click',async()=>{
    const data = await getImage(word);
    const url = data.results[0].urls.raw;
    img.setAttribute('src',url)
    img.setAttribute('width',700)
    img.setAttribute('height',600)
    input.value = "";
})