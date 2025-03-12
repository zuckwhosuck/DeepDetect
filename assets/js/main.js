    document.addEventListener('DOMContentLoaded', function() {
      // Initialize AOS
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });

      // Upload functionality
      const uploadBox = document.getElementById('upload-box');
      const fileInput = document.getElementById('file-input');
      const progressWrapper = document.querySelector('.progress-wrapper');
      const progressBar = document.querySelector('.progress-bar');
      const resultArea = document.getElementById('result-area');
      const resultImg = document.getElementById('result-img');
      const scoreValue = document.getElementById('score-value');
      const scoreLabel = document.getElementById('score-label');
      const detailsList = document.getElementById('detection-details-list');

      // Click on upload box
      uploadBox.addEventListener('click', () => {
        fileInput.click();
      });

      // Drag and drop functionality
      uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = '#5777ba';
      });

      uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.borderColor = '#d3d7da';
      });

      uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = '#d3d7da';
        if (e.dataTransfer.files.length) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      // File input change
      fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
          handleFile(fileInput.files[0]);
        }
      });

      function handleFile(file) {
        if (!file.type.match('image.*')) {
          alert('Please upload an image file');
          return;
        }

        // Display selected image
        const reader = new FileReader();
        reader.onload = function(e) {
          // Show progress
          progressWrapper.style.display = 'block';
          resultArea.style.display = 'none';
          
          // Simulate progress
          simulateProgress(e.target.result);
        }
        reader.readAsDataURL(file);
      }

      function simulateProgress(imgSrc) {
        let progress = 0;
        const interval = setInterval(() => {
          progress += 5;
          progressBar.style.width = progress + '%';
          
          if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              showResults(imgSrc);
            }, 500);
          }
        }, 100);
      }

      function showResults(imgSrc) {
        // Hide progress and show results
        progressWrapper.style.display = 'none';
        resultArea.style.display = 'block';
        
        // Set image
        resultImg.src = imgSrc;
        
        // Set random score (in real app, this would come from your API)
        const score = Math.floor(Math.random() * 100);
        scoreValue.textContent = score + '%';
        
        // Set label based on score
        if (score < 30) {
          scoreLabel.textContent = 'Likely genuine';
          scoreLabel.style.color = 'green';
        } else if (score < 70) {
          scoreLabel.textContent = 'Possibly manipulated';
          scoreLabel.style.color = 'orange';
        } else {
          scoreLabel.textContent = 'Likely deepfake';
          scoreLabel.style.color = 'red';
        }
        
        // Set details
        detailsList.innerHTML = '';
        const details = [
          'Analysis completed in 2.3 seconds',
          `Confidence score: ${score}%`,
          'Method: Convolutional Neural Network analysis',
          score > 50 ? 'Facial inconsistencies detected' : 'No facial inconsistencies detected',
          score > 40 ? 'Unnatural lighting patterns found' : 'Lighting patterns appear natural',
          score > 60 ? 'Texture abnormalities detected' : 'Texture analysis shows natural patterns'
        ];
        
        details.forEach(detail => {
          const li = document.createElement('li');
          li.textContent = detail;
          detailsList.appendChild(li);
        });
      }
  

      // Smooth scrolling for links with hash
      document.querySelectorAll('a.scrollto').forEach(link => {
        link.addEventListener('click', function(e) {
          if (document.querySelector(this.hash)) {
            e.preventDefault();
            
            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('navbar-mobile')) {
              navbar.classList.remove('navbar-mobile');
              document.querySelector('.mobile-nav-toggle').classList.toggle('bi-list');
              document.querySelector('.mobile-nav-toggle').classList.toggle('bi-x');
            }
            
            const targetElement = document.querySelector(this.hash);
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  
// FAQ TimeOut Simulator ! 
  document.addEventListener('DOMContentLoaded', function () {
    const faqLink = document.getElementById('faq-link'); // The FAQ link in the header
    const faqButton = document.getElementById('faq-question-1'); // First FAQ question button

    faqLink.addEventListener('click', function (event) {
      setTimeout(() => {
        faqButton.click(); // Simulate a click on the first FAQ question button
      }, 500); // Delay to allow smooth scrolling before clicking
    });
  });


  // Overlapping Upload Modal!
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const toggleButton2 = document.getElementById('toggleButton2');
  const uploadModal = document.getElementById("uploadModal");
  const closeModal = document.getElementById("closeModal");

  // Show modal with transition
  toggleButton.addEventListener("click", function () {
      uploadModal.classList.add("show");
  });
  toggleButton2.addEventListener("click", function () {
    uploadModal.classList.add("show");
});

  // Hide modal with transition
  closeModal.addEventListener("click", function () {
      uploadModal.classList.remove("show");
  });

  // Close modal if clicking outside the content
  uploadModal.addEventListener("click", function (event) {
      if (event.target === uploadModal) {
          uploadModal.classList.remove("show");
      }
  });
});
