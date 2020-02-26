$(() => {

  $('form').on('submit', (event) => {
    //makes form on html doc
    event.preventDefault();

    const userInput = $('input[type="text"]').val();
    //lets you put stuff in the form
  $.ajax ({
    url: 'http://stapi.co/api/v1/rest/character/search',
  }).then (
//the url that characters are grabbed from
    (data) => {
      console.log(data);

      for(let i = 0; i < data.characters.length; i++) {
        if(data.characters[i].name === userInput) {
          $('#name').text(data.characters[i].name);
          $('#uid').text(data.characters[i].uid);
          $('#yearOfDeath').text(data.characters[i].yearOfDeath);
          $('#maritalStatus').text(data.characters[i].maritalStatus);

        }

      }

    },

    (error) => {
      console.log('bad');
      //error message when something isnt right
    }

  )

  })

  let currentImgIndex = 0;
  let highestIndex = 5;

  $('.next').on('click', () => {

    const $img = $('.carousel').children().eq(currentImgIndex);
    //eq() accesses the array in jquery
    $img.css('display', 'none');
    //so it will stop showing the previous image in the array
    currentImgIndex++;

    if(currentImgIndex > highestIndex) {
      currentImgIndex = 0;
    }
    //makes it so if the currentimgindex starts over after the array is looped through

    const $img2 = $('.carousel').children().eq(currentImgIndex);
    $img2.css('display', 'block');

  })

  $('.previous').on('click', () => {

    const $img = $('.carousel').children().eq(currentImgIndex);
    //eq() accesses the array in jquery
    $img.css('display', 'none');
    //so it will stop showing the previous image in the array
    currentImgIndex--;

    if(currentImgIndex < 0) {
      currentImgIndex = highestIndex;
    }
    //makes it so if the currentimgindex starts over after the array is looped through

    const $img2 = $('.carousel').children().eq(currentImgIndex);
    $img2.css('display', 'block');

  })

})
