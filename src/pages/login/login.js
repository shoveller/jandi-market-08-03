import { closeMessageModal } from '/src/components/modal/modal.js';

function setDocumentTitle(title) {
  document.title = title;
}
setDocumentTitle('로그인 - 잔디마켓');

const URL = import.meta.env.VITE_PH_USERS;

let usersData;

// 데이버베이스에 있는 유저 정보 가져오기
const getUsersData = async () => {
  const response = await fetch(URL);
  if (response.ok) {
    const data = await response.json();
    usersData = data.items;
  }
};
getUsersData();

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#login');
const goToRegister = document.querySelector('#go_register');

let emailValue = '';
let passwordValue = '';

const handleCheckEmail = (e) => {
  emailValue = e.target.value;
};

const handleCheckPassword = (e) => {
  passwordValue = e.target.value;
};

const messageBox = document.querySelector('#modal_box');

// 데이터베이스의유저 이메일과 비밀번호를 입력 값과 비교해 로그인 시도
const handleLogin = () => {
  // 사용자 데이터가 아직 로드되지 않았으면 로그인을 시도하지 않음
  if (!usersData) {
    messageBox.classList.remove('hidden');
    closeMessageModal(
      '데이터가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.'
    );
    return;
  }

  const user = usersData.find(
    (user) => user.email === emailValue && user.password === passwordValue
  );
  if (user) {
    // 로그인 성공 시 세션 스토리지에 사용자의 ID 값을 저장 후 메인 페이지로 이동
    sessionStorage.setItem('userId', user.id);
    window.location.href = '/';
  } else {
    messageBox.classList.remove('hidden');
    closeMessageModal('아이디, 비밀번호를 확인해주세요.');
  }
};

/**
 * TODO: form 의 자체 기능을 사용하면 이 코드가 필요없게 됩니다.
 */
// password 입력 창에서 enter key를 사용해 로그인 시도 가능
password.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
});

email.addEventListener('input', handleCheckEmail);
password.addEventListener('input', handleCheckPassword);
loginButton.addEventListener('click', handleLogin);

//회원가입 버튼 클릭시 회원가입 페이지로 이동
goToRegister.addEventListener('click', () => {
  window.location.href = '/src/pages/register/';
});
