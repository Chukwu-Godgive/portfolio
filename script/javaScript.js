let projects =[{"picture" : "imgs/science.jpg"}, {"picture" : "imgs/book.jpg"}, {"picture" : "imgs/glass.jpg"}, {"picture" : "imgs/buildup.jpg"}, {"picture" : "imgs/earth.jpg"}]

//this is for Next button
const getProject = document.getElementById("next-button")
getProject.addEventListener("click", function(){

    const randomprojects = Math.floor( Math.random() * projects.length )
    let projectsImage = document.getElementById("image1")
        projectsImage.setAttribute("src", projects[randomprojects].picture)
})


//This is for Previous button
const getProject1 = document.getElementById("previous-button")
getProject1.addEventListener("click", function(){

    const randomprojects1 = Math.floor( Math.random() * projects.length )
    let projectsImage1 = document.getElementById("image1")
        projectsImage1.setAttribute("src", projects[randomprojects1].picture)
})