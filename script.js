const block = document.querySelector('.target')
const difficultyLevel = document.querySelectorAll('.wrapper-buttons>button')
const wrapper = document.querySelector('.wrapper')
let time
difficultyLevel.forEach((btn) => {
    btn.addEventListener('click', () => {
        switch (btn.textContent) {
            case 'Легкий': 
                time = 900
                break;
            case 'Средний': 
                time = 600
                break;
            case 'Сложный': 
                time = 400
                break;
        }
        wrapper.style.display = 'none'
        block.style.display = 'block'

        // Интервал

        const interval = setInterval(() => {
            const randomWidth =  Math.floor(Math.random() * ((window.innerWidth - 50) - 1 + 1)) + 1
            const randomHeight =  Math.floor(Math.random() * (window.innerHeight - 1 + 1)) + 1
            block.style.top = `${randomHeight}px`
            block.style.left = `${randomWidth}px`
        }, time)

        block.addEventListener('click', () => {
            block.style.backgroundColor = 'black'
            clearInterval(interval)
            setTimeout(() => {
                alert('Игра завершена')
                location.reload()
            }, 1500)
        })

        //
    })
})




