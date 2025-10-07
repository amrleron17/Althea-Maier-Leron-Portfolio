// Navigation smooth scroll & section show
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    target.classList.remove("hidden");
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
});

// Start Button → Go to About Me
document.getElementById("startBtn").addEventListener("click", () => {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById("about").classList.remove("hidden");
  window.scrollTo({top: 0, behavior: 'smooth'});
});
