function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // เช็ครหัสผ่าน (เปลี่ยนเงื่อนไขตามที่คุณต้องการ)
    if (username === "user" && password === "password") {
        alert("เข้าสู่ระบบสำเร็จ");
        // ทำการเข้าสู่ระบบ
    } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านถูกต้อง");
        // ไม่อนุญาตให้เข้าสู่ระบบ
    }
}
