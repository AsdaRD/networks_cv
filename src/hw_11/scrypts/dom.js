function TrafficLightWidget(buttons) {
    
    for(const button of buttons) {
        button.onclick = toggle;
        let isActive = true;
        
        function toggle() {
            if(isActive) {
                toggleOn();
            
            } else {
                toggleOff();
            }

            function toggleOn() {
                button.classList.add('active');
                isActive = false;
            }

            function toggleOff() {
                button.classList.remove('active');
                isActive = true;                
            }
        }    
    }
    

}
TrafficLightWidget(document.querySelectorAll('.btn'));
