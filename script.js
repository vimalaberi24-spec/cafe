let count = localStorage.getItem("cart") || 0;
updateCart();

function addToCart(item){
  count++;
  localStorage.setItem("cart", count);
  updateCart();
  alert(item + " added!");
}

function updateCart(){
  let c = document.getElementById("count");
  if(c) c.innerText = count;
}

function goMenu(){
  window.location.href = "menu.html";
}

function submitForm(e){
  e.preventDefault();
  alert("Message sent!");
}
