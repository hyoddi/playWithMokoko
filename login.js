const userIcon = document.getElementById('user-icon');
const loginBackground = document.getElementById('login-popup');
const loginForm = document.querySelector('.login-popup-content');

userIcon.addEventListener('click', () => {
  

  loginBackground.style.display = 'flex';
  loginForm.style.display = 'flex';
});




// 로그인 팝업 닫기 버튼
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  loginBackground.style.display = 'none';
  loginForm.style.display = 'none';
});
