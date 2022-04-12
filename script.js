const sounds = ['bababoey','bonk','bomm','bruh','Cod-1','Cod-2','Cod-3','Cod-4','Cod-5','Cod-6','Cod-7','shine','wow','yahoo'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText=sound;

    btn.addEventListener('click',()=>{
        stopmemes();

        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn);

})

/*
//Enable this function only when you want to hear a single meme sound on button press instead of previous meme sound playing in the background
function stopmemes(){
    sounds.forEach(sound =>{
        const meme=document.getElementById(sound);

        meme.pause();
        meme.currentTime=0;
    })
}
*/