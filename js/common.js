//////////////////////////////////////////////////// 검색창
const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  //Logic..
  searchInputEl.focus();
});


// 인풋 플레이스홀더 포커스 넣었다 뻈다
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

///////////////////////////////////////////// copyright year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear() // 2022