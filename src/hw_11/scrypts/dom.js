function TrafficLightWidget(buttons) {
    let off = 0;
    for(const button of buttons) {
        button.onclick = toggle;
        
        function toggle() {
            if(button.classList.contains('active')) {
                toggleOff();
                
            } else {
                toggleOn();
            }
            
            function toggleOn() {
                if(off !== 0) {
                    off.classList.remove('active');
                button.classList.add('active');
                off = button;
                } else {
                    button.classList.add('active');
                off = button;
                }
            
            }

            function toggleOff() {
                button.classList.remove('active');
            }
        }    
    }
    

}
export { TrafficLightWidget };