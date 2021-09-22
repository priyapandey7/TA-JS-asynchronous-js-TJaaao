const input = document.querySelector('input')
const grid = document.querySelector('grid')

input.addEventListener('keydown',function(event){
    if  (event.key === "Enter")
    loadImg();
})
function loadImg(){
removeImages();
const url = 'https://api.unsplash.com/photos/?query='+input.value+'&per_page=9&client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA';

fetch(url)

function removeImages(){
    grid.innerHTML = "";
}
}
// const url = `https://api.unsplash.com/photos/random/?client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA`;
// const getSearchUrl = (query) =>
//   `// https://api.unsplash.com/photos?query=${query}&client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA`;
// const imageUl = document.querySelector('img');
// const searchElm = document.querySelector('input');

















// 1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA
// https://api.unsplash.com/photos/random/?client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA