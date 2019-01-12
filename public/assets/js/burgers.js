// this is where all of the click listener functions will be located with ajax calls to the server

$(function() {
  $('.addBurger').on('submit', function(e) {
    e.preventDefault()

    let newBurger = {
      burger_name: $('.newBurgerName').val().trim()
    }
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      console.log('added a new burger')
      location.reload()
    })
  })

  $('.devour').on('click', function(e) {
    e.preventDefault()

    let id = $(this).data('id')
    let devour = $(this).data('devoured')

    let eaten = {
      devoured: devour
    }

    $.ajax('/api/burgers/'+id, {
      type: 'PUT',
      data: eaten
    }).then(function(){
      location.reload()
    })
  })




})