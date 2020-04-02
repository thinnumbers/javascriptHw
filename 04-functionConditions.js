function tomNook(bells){
  if(bells <= 10){
    return "you are too poor. Get out";
  }
  else if(bells > 10 && bells < 200){
    return "you are in debt";
  }
  else{
    return "welcome to the island";
  }
}
console.log(tomNook(5));
console.log(tomNook(45));
console.log(tomNook(500));
