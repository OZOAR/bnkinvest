function makeSound(id){
  switch(id){
      case "cat1":
          document.getElementById("prod-2").style.display = 'none';
          document.getElementById("prod-3").style.display = 'none';
          document.getElementById("prod-4").style.display = 'none';
          document.getElementById("prod-1").style.display = 'block';

          document.getElementById("cat2").classList.remove("active");
          document.getElementById("cat3").classList.remove("active");
          document.getElementById("cat4").classList.remove("active");
          document.getElementById("cat1").classList.add("active");
          break;
      case "cat2":
          document.getElementById("prod-1").style.display = 'none';
          document.getElementById("prod-3").style.display = 'none';
          document.getElementById("prod-4").style.display = 'none';
          document.getElementById("prod-2").style.display = 'block';
          
          document.getElementById("cat1").classList.remove("active");
          document.getElementById("cat3").classList.remove("active");
          document.getElementById("cat4").classList.remove("active");
          document.getElementById("cat2").classList.add("active");
          break;
      case "cat3":
          document.getElementById("prod-1").style.display = 'none';
          document.getElementById("prod-2").style.display = 'none';
          document.getElementById("prod-4").style.display = 'none';
          document.getElementById("prod-3").style.display = 'block';

          document.getElementById("cat1").classList.remove("active");
          document.getElementById("cat2").classList.remove("active");
          document.getElementById("cat4").classList.remove("active");
          document.getElementById("cat3").classList.add("active");
          break;
      case "cat4":
          document.getElementById("prod-1").style.display = 'none';
          document.getElementById("prod-2").style.display = 'none';
          document.getElementById("prod-3").style.display = 'none';
          document.getElementById("prod-4").style.display = 'block';

          document.getElementById("cat1").classList.remove("active");
          document.getElementById("cat2").classList.remove("active");
          document.getElementById("cat3").classList.remove("active");
          document.getElementById("cat4").classList.add("active");
          break;
  }
}