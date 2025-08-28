const items = document.querySelectorAll(".item")
const action = document.getElementById("action")
const icondowns = document.querySelectorAll(".fa-chevron-down")

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        if(this.classList.contains('active')  || e.target.classList.contains('fa-chevron-donw')){
            return;
        }
    })
})