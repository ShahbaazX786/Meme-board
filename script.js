const sounds = ['bababoey','bonk','wow','bom','bruh','c1','c2','c3','c4','c5','c6','c7','shine','yahoo']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText=sound
    document.getElementsById('buttons')
    appendChild(btn)  

})