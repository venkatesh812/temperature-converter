function convert(){
    const a = document.getElementById('inp');
    const b = document.getElementById('drop');
    const c = document.getElementById('drop2');
    const d = document.getElementById('outn');
    const e = document.getElementById('outd');
    if(b.value=='°C' && c.value=='kelvin (K)'){
        d.innerHTML =  Math.ceil(parseFloat(a.value) + 273.15);
        e.innerText='K';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='°C' && c.value=='Fahrenheit (°F)'){
        d.innerHTML =   Math.ceil((parseFloat(a.value)*(9/5)) + 32);
        e.innerText='°F';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='°C' && c.value=='Celsius (°C)'){
        d.innerHTML = a.value;
        e.innerHTML = b.value;
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='°F' && c.value=='kelvin (K)'){
        d.innerHTML =   Math.ceil(((parseFloat(a.value)-32)*(5/9)) + 273.15 );
        e.innerText='K';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='°F' && c.value=='Celsius (°C)'){
        d.innerHTML =  Math.ceil(((parseFloat(a.value)-32)*(5/9)));
        e.innerHTML = '°C';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='°F' && c.value=='Fahrenheit (°F)'){
        d.innerHTML =  a.value
        e.innerText=b.value;
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='K' && c.value=='kelvin (K)'){
        d.innerHTML =  a.value;
        e.innerText=b.value;
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='K' && c.value=='Fahrenheit (°F)'){
        d.innerHTML =   Math.ceil(((parseFloat(a.value)-273.15)*(9/5))+ 32);
        e.innerText='°F';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }else if(b.value=='K' && c.value=='Celsius (°C)'){
        d.innerHTML =  Math.ceil(parseFloat(a.value)- 273.15);
        e.innerHTML = '°C';
        d.style.fontWeight='bold';
        e.style.fontWeight='bold';
    }
    
};