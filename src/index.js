// index.js

// Callbacks
const handleClick = (ramen) => {
  const detalImage = document.querySelector('.detail-image')
  detalImage.src = ramen.image
  const ramenName = document.querySelector('.name')
  ramenName.textContent = ramen.name
  const restaurant = document.querySelector('.restaurant')
  restaurant.textContent = ramen.restaurant
  const comment = document.querySelector('#comment-display')
  comment.textContent = ramen.comment
  const ratingDisplay = document.querySelector('#rating-display')
  ratingDisplay.textContent = ramen.rating
  
};

const addSubmitListener = () => {
  const submitForm = document.querySelector('#new-ramen')
  
  submitForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newName = document.querySelector('#new-name')
    const newRestaurant = document.querySelector('#new-restaurant')
    const newImage = document.querySelector('#new-image')
    const newRating = document.querySelector('#new-rating')
    const newComment = document.querySelector('#new-comment')
    const name = document.querySelector('.name')
    const restaurantName = document.querySelector('.restaurant')
    const detailImage = document.querySelector('.detail-image')
    const comment = document.querySelector('#comment-display')
    const ratingDisplay = document.querySelector('#rating-display')
    const menuDisplay = document.querySelector('#ramen-menu')

    name.textContent = newName.value 
    restaurantName.textContent = newRestaurant.value 
    detailImage.src = newImage.value
    comment.textContent = newComment.value 
    ratingDisplay.textContent = newRating.value

    const newThumbnail = document.createElement('img')
    newThumbnail.src = newImage.value
    menuDisplay.appendChild(newThumbnail)
    newThumbnail.addEventListener('click', () => {
      handleClick({
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newImage.value

        
      })
     
    })
  }) 
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(ramens => {
    ramens.forEach(ramen => {
    const menuDisplay = document.querySelector('#ramen-menu')
    const ramenThumbnail = document.createElement('img')  
    ramenThumbnail.src = ramen.image
    menuDisplay.appendChild(ramenThumbnail)
    ramenThumbnail.addEventListener('click', () => {
      handleClick(ramen)
    })
    
    })
  })
};

const main = () => {
  displayRamens()
  addSubmitListener()
  
}

document.addEventListener('DOMContentLoaded', () => {
  main()
})

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
