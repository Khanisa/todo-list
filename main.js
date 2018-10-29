var iconMenu = document.querySelector(".icon-menu"),
    sideMenu = document.querySelector("#side"),
    closeIcon = document.querySelector(".icon-close"),
    dashboardButton = document.querySelector(".dashboard-btn"),
    dashboardPage = document.querySelector(".dashboard"),
    todaysActivityButton = document.querySelector(".activity-btn"),
    todaysActivityPage = document.querySelector(".todays-activity"),
    newTaskButton = document.querySelector(".new-task-btn"),
    newTaskPage = document.querySelector(".new-task");
    signOutButton = document.querySelector(".signout-btn");

iconMenu.addEventListener("click", function(showSide) {
    sideMenu.classList.add("active");
});

closeIcon.addEventListener("click", function(closeSide) {
    sideMenu.classList.remove("active");
});

dashboardButton.addEventListener("click", function(showPage) {
    dashboardPage.classList.add("active");
});

todaysActivityButton.addEventListener("click", function(showPage) {
    dashboardPage.classList.remove("active");
    todaysActivityPage.classList.add("active");
});

newTaskButton.addEventListener("click", function(showPage) {
    dashboardPage.classList.remove("active");
    todaysActivityPage.classList.remove("active");
    newTaskPage.classList.add("active");
});

signOutButton.addEventListener("click", function() {
    
});
