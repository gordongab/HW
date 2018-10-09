const studentList = [
    'Lisa',
    'Sarah',
    'Anne',
    'George',
    'Daniel',
    'Jionni',
    'Jennifer',
    'Tasha'
  ];
  
  // Using the new DOM Manipulation library, do all of the following: 
  
  // 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.
 
  function renderNames() {
    const individual = $('.content');
    individual.empty();
       for (let i = 0; i < studentList.length; i++) {
            individual.append(`<div><p class="name">${studentList[i]}</p></div>`);
    }
  }
  renderNames();
  
  // // 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
  // //listens for add button to be clicked
  
  $('#add').on('click', function (e) {
        const name = $('#name').val();
            $('#name').val('');
                studentList.push(name);
   
    renderNames();
  });
  
  
  // 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
  
  function search(e) {
    $('body').removeClass('.blue');
        for (let i = 0; i < studentList.length; i++) {
            let name = studentList[i];
              if ($('#name').val() == name) {
                $('body').addClass('.blue');
      }
    }
  }
  $('#search').on('click', search);
  
  // 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.
  
  $('#delete').on('click', function () {
      for (let i = 0; i < studentList.length; i++) {
         let name = studentList[i];
            if ($('#name').val() == name) {
               studentList.splice(i, 1);
        }
      }
      renderNames();
    }
  );
  