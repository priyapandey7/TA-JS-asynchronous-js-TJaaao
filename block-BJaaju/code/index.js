const url = 'https://api.unsplash.com/photos/random/?client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA'

const getSearchUrl = (query) => `https://api.unsplash.com/search/photos?query=${query}&client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA`

const root = document.querySelector(".images")
const searchElm = document.querySelector("input")

function fetch(url,successHandler){
  let xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.onload = () => successHandler(JSON.parse(xhr.response));

  xhr.onerror = function(){
    console.error('somthing went wrong')
  };
  xhr.send();
}
function displayImages(images){
     root.innerHTML = "";
     images.forEach ((image => {
      let li = document.createElement("li")
      let img = document.createElement("img")
      img.src = image.urls.thumb;
      li.append(img);
      root.append(li);

    }));
  }

fetch(url, displayImages);

function handleSearch(event){
 if (event.keycode == 13 &&  searchElm.value){
   fetch(getSearchUrl(searchElm.value),(searchResult)=>{
     displayImages(searchResult.results)
   })
 }
}

searchElm.addEventListener('keyup',handleSearch)






// 1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA
// https://api.unsplash.com/photos/random/?client_id=1YZfb7Vy3OXh6kaJJi3Lnmfbj2cALWOXFZwnT8nY8UA