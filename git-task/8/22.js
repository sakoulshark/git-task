function role() {
    console.log("我的身份：", this.role);
}
let me = {
    role: "迪迦"
}
role.call(me)