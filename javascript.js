function addNotice() {
    const input = document.getElementById('newNotice');
    const noticeText = input.value.trim();
  
    if (noticeText !== '') {
      const li = document.createElement('li');
      li.textContent = noticeText;
      document.getElementById('notice-list').appendChild(li);
      input.value = '';
    } else {
      alert('공지사항 내용을 입력해주세요.');
    }
  }