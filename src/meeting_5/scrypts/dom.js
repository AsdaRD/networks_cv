function Switcher(button, lamp) {
        button.onclick = toggle;
        function toggle() {
            if(button.innerHTML === 'ON'){
                button.innerHTML = 'OFF';
                lamp.style.cssText = 'background-color: limegreen; box-shadow: 0 20px 40px 0 rgba(27, 255, 6, 0.24), 0 30px 70px 0 rgba(14, 179, 22, 0.19);'
            } else {
                button.innerHTML = 'ON';
                lamp.style.cssText = 'background-color: white;'
            }
        } 

        
}

export { Switcher };