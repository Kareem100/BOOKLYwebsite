var light=1;
function ChangeTheme (){
    
    if (light==1){
        window.BODY.style.background="linear-gradient(90deg, #000000, #434343)";
        light=0;
    }
    else if (light == 0){
        window.BODY.style.background="linear-gradient(90deg, #ADA996, #F2F2F2, #DBDBDB, #EAEAEA)";    
        light=1;
    }
}

// label: '🌓', // default: ''