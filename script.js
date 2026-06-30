const elementosAnimados=document.querySelectorAll('.tarjeta, .categoria-stack')
const opciones={
    threshold:0.1
};

const observador=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target)
        }
    })
},opciones)

elementosAnimados.forEach(elemento=>{
    observador.observe(elemento)
})

function actualizarReloj(){
    const elementoReloj=document.getElementById('reloj-local')
    const ahora=new Date()

    const horas=String(ahora.getHours()).padStart(2,'0')
    const minutos=String(ahora.getMinutes()).padStart(2,'0')
    const segundos=String(ahora.getSeconds()).padStart(2,'0')

    elementoReloj.textContent=`>Local_time: ${horas}:${minutos}:${segundos} CET`;
}

actualizarReloj();
setInterval(actualizarReloj,1000)
