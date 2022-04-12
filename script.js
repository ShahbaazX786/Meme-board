const sounds = ['bababoey','bonk','bomm','bruh','Cod-1','Cod-2','Cod-3','Cod-4','Cod-5','Cod-6','Cod-7','shine','wow','yahoo'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');


    btn.addEventListener('click',()=>{
        document.getElementById(sound).play()
    })

    btn.innerText=sound;
    document.getElementById('buttons').appendChild(btn);

})