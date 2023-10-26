let profileMenu = document.getElementById('profileMenu');

function toggleMenu(){
  profileMenu.classList.toggle('open-menu');
}

let sideEl = document.getElementById('sidebar-el');
let showMore = document.getElementById('show-more');

showMore.addEventListener('click', function displayElement(){
  if(sideEl.style.display === 'block'){
    sideEl.style.display = 'none';
    showMore.innerHTML = 'Show';
  } else{
    sideEl.style.display = 'block';
    showMore.innerHTML = 'Hide';
  }
})