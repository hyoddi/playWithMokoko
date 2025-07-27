const userIcon = document.getElementById('user-icon');
const loginBackground = document.getElementById('login-popup');
const loginForm = document.querySelector('.login-popup-content');

const level = document.querySelector('.level');
const username = document.querySelector('.username');


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

// 로그인 버튼 클릭 이벤트
const loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // 기본 폼 제출 동작 방지
  
  const usernameInput = document.querySelector('.username-input').value.trim();
  const levelInput = document.querySelector('.level-input').value.trim();

  // 숫자나 비어있으면 거르기
  if (!levelInput || isNaN(levelInput)) {
    alert('레벨을 숫자로 입력해주세요.');
    return; // 실행 중단
  }

  // username, level 요소가 존재해야 함
  level.textContent = `Lv.${levelInput}`;
  username.textContent = usernameInput || '기본 모코코'; // 이름 없으면 기본값

  // 로그인 창 닫기
  loginBackground.style.display = 'none';
  loginForm.style.display = 'none';
});
