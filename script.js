document.getElementById("generate-image").addEventListener("click", displayMoreInfo);

function displayMoreInfo() {
    const profileCard = document.getElementById("profile-card");

    // Check if additional info already exists
    if (document.querySelector(".additional-info")) return;

    // Create additional information section
    const details = document.createElement("div");
    details.className = "additional-info";

    details.innerHTML = `
        <h3>About Me</h3>
        <p>I am passionate about coding, creating web applications, and learning new technologies. I enjoy solving complex problems through innovative solutions.</p>

        <h3>Skills</h3>
        <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node.js</li>
            <li>Database Management (SQL, MongoDB)</li>
            <li>Problem Solving & Algorithms</li>
        </ul>

        <h3>Contact</h3>
        <p>Email: yadavniteen360@gmail.com</p>
        <p>Phone: +91 8858728752</p>
        <p>Address: Lucknow(U.P)</p>

        <h3>Social Accounts</h3>
        <div class="social-links">
            <a href="https://www.instagram.com/_niteen_yadav_/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"> Instagram
            </a>
            <a href="https://www.linkedin.com/in/niteen-kumar-yadav-48189532a/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"> LinkedIn
            </a>
            <a href="https://x.com/yadavniteen360" target="_blank">
                <img src="x.png".svg
 alt="X"> X
            </a>
            <a href="https://www.facebook.com/yaduvanshiniteen" target="_blank">
                <img src="facebook.png" alt="Facebook"> Facebook
            </a>
        </div>
    `;

    profileCard.appendChild(details);

    // Hide the "More Information" button
    document.getElementById("generate-image").style.display = "none";

    // Apply animation
    setTimeout(() => {
        details.classList.add("fade-in-slide");
    }, 100); // Delay animation slightly for better effect
}
