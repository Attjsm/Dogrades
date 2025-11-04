// ดึงปุ่มมาใช้งาน
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// ดึง iframe ที่จะใช้แสดงเวปไซต์
const iframe = document.getElementById('webframe');

// ฟังก์ชันเพื่อลบคลาส active จากทุกปุ่มและเพิ่มคลาส active ให้กับปุ่มที่ถูกเลือก
function setActiveButton(selectedButton) {
    // ลบคลาส active จากปุ่มทั้งหมด
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('active'));

    // เพิ่มคลาส active ให้กับปุ่มที่ถูกเลือก
    selectedButton.classList.add('active');
}

// ตั้งค่าเมื่อกดปุ่ม btn1 เพื่อเปิด และเปลี่ยนสีปุ่ม
btn1.addEventListener('click', () => {
    iframe.src = 'https://script.google.com/macros/s/AKfycbyTlzvGLS4poMXZybaTpWMd81Zawl7ZfSv7pT8xR_k9WSnLRWRj390liAPf3CiIwPfTCA/exec?openExternalBrowser=1';
    setActiveButton(btn1);
});

// ตั้งค่าเมื่อกดปุ่ม btn2 เพื่อเปิด  และเปลี่ยนสีปุ่ม
btn2.addEventListener('click', () => {
    iframe.src = 'https://script.google.com/macros/s/AKfycbyLHgwraxLik-Uop838W6qLhWAnKzvCec5cuc5CCZ_c3r7Frf2xbmdm7tIpJBD39pivGg/exec?openExternalBrowser=1';
    setActiveButton(btn2);
});
