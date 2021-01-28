const buttons = document.querySelectorAll('.btn');

for(const button of buttons) {
    button.onclick = activate;
    function activate () {
        button.classList.toggle('btn_active');
    }
}
