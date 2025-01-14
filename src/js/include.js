/**
 * TODO: 일종의 서버사이드 렌더링을 시도하셨군요!
 * 이 방법은 vite 에서만 동작한다는 것만 알고 계시면 좋겠습니다.
 */
// header.html 파일을 가져와서 header 요소에 삽입
fetch('/src/components/header/header.html')
  .then((response) => response.text())
  .then((html) => {
    const headerElement = document.querySelector('#header');
    headerElement.innerHTML = html;
    return import('/src/components/header/header.js');
  })
  .catch((error) => {
    console.error(error);
  });

fetch('/src/components/header/headerCategory.html')
  .then((response) => response.text())
  .then((html) => {
    const headerCategoryElement = document.querySelector('#menu_list');
    if (!headerCategoryElement) return;
    headerCategoryElement.innerHTML = html;
  })
  .catch((error) => {
    console.error(error);
  });

// footer.html 파일을 가져와서 footer 요소에 삽입
fetch('/src/components/footer/footer.html')
  .then((response) => response.text())
  .then(async (html) => {
    const footerElement = document.querySelector('#footer');
    footerElement.innerHTML = html;
    return import('/src/components/footer/footer.js');
  })
  .catch((error) => {
    console.error(error);
  });

// addCart.html 파일을 가져와서 addCart 요소에 삽입
fetch('/src/components/addCart/addCart.html')
  .then((response) => response.text())
  .then(async (html) => {
    const addCartElement = document.querySelector('#addCart');
    if (!addCartElement) return;
    addCartElement.innerHTML = html;
    return import('/src/components/addCart/addCart.js');
  })
  .catch((error) => {
    console.error(error);
  });
// detailModal.html 파일을 가져와서 detailModal 요소에 삽입
fetch('/src/components/detailModal/detailModal.html')
  .then((response) => response.text())
  .then(async (html) => {
    const detailModalElement = document.querySelector('#detailModal');
    if (!detailModalElement) return;
    detailModalElement.innerHTML = html;
    return import('/src/components/detailModal/detailModal.js');
  })
  .catch((error) => {
    console.error(error);
  });

fetch('/src/components/modal/modal.html')
  .then((response) => response.text())
  .then(async (html) => {
    const modalElement = document.querySelector('#modal_box');
    if (!modalElement) return;
    modalElement.innerHTML = html;
    return import('/src/components/modal/modal.js');
  })
  .catch((error) => {
    console.error(error);
  });

fetch('/src/components/bubble/index.html')
  .then((response) => response.text())
  .then(async (html) => {
    const bubbleElement = document.querySelector('#addBubble');
    if (!bubbleElement) return;
    bubbleElement.innerHTML = html;
    return import('/src/components/bubble/bubble.js');
  })
  .catch((error) => {
    console.error(error);
  });
