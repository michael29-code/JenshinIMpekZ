const panels = document.querySelectorAll(".content-panel")
const content = document.querySelectorAll(".content")

panels.forEach((panel, index) => {
        panel.addEventListener("mouseenter", () => {
            removeActiveClass()
            panel.classList.add("active")
            content[index].style.display = 'flex'
            console.log(content.length)
        })
    })

panels.forEach((panel) => {
    panel.addEventListener("mouseleave", () => {
        removeActiveClass()
    })
})
    
    function removeActiveClass()
    {
        panels.forEach(panel =>
            {
                for(let i = 0; i < content.length; i++)
                {
                    content[i].style.display = 'none'
                }
                panel.classList.remove("active")

        })
}