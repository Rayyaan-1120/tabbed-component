const btnwrapper = document.querySelector('.btn-wrapper')
const btnselect = document.querySelectorAll('.btnselect')
const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')
const content = document.querySelectorAll('.content')

btnwrapper.addEventListener('click',function(e) {
    const button = e.target.closest('.btnselect')

    console.log(button)

    if(!button) return

    btnselect.forEach(b => {
        b.classList.remove('btn_active')
    })
    button.classList.add('btn_active')
    content.forEach(c => c.classList.remove('content_active'))
    console.log(button.dataset.tab)
    document.querySelector(`.content${button.dataset.tab}`).classList.add('content_active')
})