$(document).ready(function () {
    $('#sign-in').on('click', function (event) {
        event.preventDefault()
        const email = $('#floatingInput').val().trim()
        const password = $('#floatingPassword').val().trim()
        console.log('email', email)
        console.log('password', password)
    })

})