document.getElementById('joinBtn').addEventListener('click', () => {
  alert('Bạn đã được thêm vào danh sách chờ!');
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  document.getElementById('response').textContent = `Cảm ơn bạn, ${email}, đã đăng ký!`;
});
