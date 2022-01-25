class Code {
 constructor() {
  this.type = 'home';
  this.heightvalue = ((56.25 / 100) * document.documentElement.clientWidth);
  this.scrollBt();
 }

 scrollBt() {
  const homeBt = document.getElementById('home_bt');
  const aboutBt = document.getElementById('about_bt');
  const resourceBt = document.getElementById('resource_bt');
  const contactBt = document.getElementById('contact_bt');
  aboutBt.addEventListener('click', () => {
   this.scroll(1);
  });
  resourceBt.addEventListener('click', () => {
   this.scroll(2);
  });
  contactBt.addEventListener('click', () => {
   this.scroll(3);
  });
 }

 scroll(num) {
  window.scrollBy(0, (num * this.heightvalue));
 }

}



class App {

 static code() {
  new Code();
 }

}

App.code();