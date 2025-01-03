
// Function to filter courses by level and search term
document.getElementById("filterButton").addEventListener("click", function () {
    const searchText = document.getElementById("courseSearch").value.toLowerCase();
    const selectedLevel = document.getElementById("courseFilter").value;
    const courses = document.querySelectorAll(".course-card");
  
    courses.forEach((course) => {
      const courseTitle = course.querySelector(".card-title").textContent.toLowerCase();
      const courseLevel = course.querySelector(".badge").textContent.toLowerCase();
  
      // Check if course matches both search text and selected level
      const matchesSearch = courseTitle.includes(searchText);
      const matchesLevel = selectedLevel === "all" || courseLevel === selectedLevel;
  
      if (matchesSearch && matchesLevel) {
        course.parentElement.style.display = "block"; // Show matching courses
      } else {
        course.parentElement.style.display = "none"; // Hide non-matching courses
      }
    });
  });