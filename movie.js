let movieobj = function(mname, mrating) {
    this.name = mname;
    this.rate = mrating;
    this.msg = function(){
      return (this.name + " "+"has a rating of"+""+this.rate);
    }
  }

  function vaiLdate() {
    if (this.name  == "" || this.name == null) {
    return false; 
    }
    else if (this.rate >5){
         return (false);
    }
    else if (this.rate <1){
        return (false);
    }
    else {
       console.log("i am here on movie.js")
       return (true);
    }
  }
  function getAll(){
    return this.msg;
  }



