
let Favorites = function (pfriend, panimal) {
    this.friend = pfriend;
    this.animal = panimal;
  }

  function validate(inputfaves) {
   
    if (inputfaves.name  === "" || inputfaves.name === null) {
    return false; 
    }

    else {
       console.log("the input is vaild.")
       return true;
    }
  }
  function getAll(inputfaves){
     return (inputfriend + "'s "+" favorite animal is a/an"+""+inputanimal);
  }
