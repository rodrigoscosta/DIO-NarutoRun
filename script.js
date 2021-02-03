document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.fundo-tela');
    const naruto = document.querySelector('.naruto')
    const grid = document.querySelector('.grid')
    const body = document.querySelector('body')
    const alert = document.getElementById('alert')
    let isJumping = false
    let gravity = 0.9
    let isGameOver = false
    
    function control(e) {
      if (e.keyCode === 32) {
        if (!isJumping) {
          isJumping = true
          jump()
        }
      }
    }
    document.addEventListener('keyup', control)
    
    let position = 0
    function jump() {
      let count = 0
      let timerId = setInterval(function () {
        //move down
        if (count === 15) {
          clearInterval(timerId)
          let downTimerId = setInterval(function () {
            if (count === 0) {
              clearInterval(downTimerId)
              isJumping = false
            }
            position -= 5
            count--
            position = position * gravity
            naruto.style.bottom = position + 'px'
          },20)
    
        }
        //move up
        position +=30
        count++
        position = position * gravity
        naruto.style.bottom = position + 'px'
      },20)
    }
    
    function createAkatsukiTobi() {
      let randomTime = Math.random() * 8000
      let akatsukiPosition = 1500
      const akatsuki = document.createElement('div')
      if (!isGameOver) akatsuki.classList.add('akatsukiTobi')
      grid.appendChild(akatsuki)
      akatsuki.style.left = akatsukiPosition + 'px'
    
      let timerId = setInterval(function() {
        if (akatsukiPosition > 0 && akatsukiPosition < 60 && position < 60) {
          clearInterval(timerId)
          alert.innerHTML = 'Game Over'
          isGameOver = true
          //remove all children
          body.removeChild(body.firstChild)
          while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
          }
          
        }
        akatsukiPosition -=15
        akatsuki.style.left = akatsukiPosition + 'px'
      },20)
      if (!isGameOver) setTimeout(createAkatsukiTobi, randomTime)
    }
    createAkatsukiTobi()

    function createAkatsukiPain() {
        let randomTime = Math.random() * 12000
        let akatsukiPosition = 1500
        const akatsuki = document.createElement('div')
        if (!isGameOver) akatsuki.classList.add('akatsukiPain')
        grid.appendChild(akatsuki)
        akatsuki.style.left = akatsukiPosition + 'px'
      
        let timerId = setInterval(function() {
          if (akatsukiPosition > 0 && akatsukiPosition < 60 && position < 60) {
            clearInterval(timerId)
            alert.innerHTML = 'Game Over'
            isGameOver = true
            //remove all children
            body.removeChild(body.firstChild)
            while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
            }
            
          }
          akatsukiPosition -=15
          akatsuki.style.left = akatsukiPosition + 'px'
        },20)
        if (!isGameOver) setTimeout(createAkatsukiPain, randomTime)
      }
      createAkatsukiPain()

      function createAkatsukiItachi() {
        let randomTime = Math.random() * 18000
        let akatsukiPosition = 1500
        const akatsuki = document.createElement('div')
        if (!isGameOver) akatsuki.classList.add('akatsukiItachi')
        grid.appendChild(akatsuki)
        akatsuki.style.left = akatsukiPosition + 'px'
      
        let timerId = setInterval(function() {
          if (akatsukiPosition > 0 && akatsukiPosition < 60 && position < 60) {
            clearInterval(timerId)
            alert.innerHTML = 'Game Over'
            isGameOver = true
            //remove all children
            body.removeChild(body.firstChild)
            while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
            }
            
          }
          akatsukiPosition -=15
          akatsuki.style.left = akatsukiPosition + 'px'
        },20)
        if (!isGameOver) setTimeout(createAkatsukiItachi, randomTime)
      }
      createAkatsukiItachi()

      function createAkatsukiSasori() {
        let randomTime = Math.random() * 10000
        let akatsukiPosition = 1500
        const akatsuki = document.createElement('div')
        if (!isGameOver) akatsuki.classList.add('akatsukiSasori')
        grid.appendChild(akatsuki)
        akatsuki.style.left = akatsukiPosition + 'px'
      
        let timerId = setInterval(function() {
          if (akatsukiPosition > 0 && akatsukiPosition < 60 && position < 60) {
            clearInterval(timerId)
            alert.innerHTML = 'Game Over'
            isGameOver = true
            //remove all children
            body.removeChild(body.firstChild)
            while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
            }
            
          }
          akatsukiPosition -=15
          akatsuki.style.left = akatsukiPosition + 'px'
        },20)
        if (!isGameOver) setTimeout(createAkatsukiSasori, randomTime)
      }
      createAkatsukiSasori()

      function createAkatsukiDeidara() {
        let randomTime = Math.random() * 20000
        let akatsukiPosition = 1500
        const akatsuki = document.createElement('div')
        if (!isGameOver) akatsuki.classList.add('akatsukiDeidara')
        grid.appendChild(akatsuki)
        akatsuki.style.left = akatsukiPosition + 'px'
      
        let timerId = setInterval(function() {
          if (akatsukiPosition > 0 && akatsukiPosition < 60 && position < 60) {
            clearInterval(timerId)
            alert.innerHTML = 'Game Over'
            isGameOver = true
            //remove all children
            body.removeChild(body.firstChild)
            while (grid.firstChild) {
            grid.removeChild(grid.lastChild)
            }
            
          }
          akatsukiPosition -=15
          akatsuki.style.left = akatsukiPosition + 'px'
        },20)
        if (!isGameOver) setTimeout(createAkatsukiDeidara, randomTime)
      }
      createAkatsukiDeidara()
    })