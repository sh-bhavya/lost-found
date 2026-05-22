// Function to scroll the carousel
     function scrollCarousel(direction) {
         const carousel = document.querySelector('.carousel');
         const scrollAmount = carousel.clientWidth;
         carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
     }
     // Function to request location permission
     function requestLocation() {
         if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(
                 (position) => {
                     alert(`Location: ${position.coords.latitude}, ${position.coords.longitude}`);
                 },
                 (error) => {
                     alert('Location permission denied.');
                 }
             );
         } else {
             alert('Geolocation is not supported by this browser.');
         }
     }
     // Function to initialize Google Translate
     function googleTranslateElementInit() {
         new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
     }
     // Function to toggle chat window
     function toggleChatWindow() {
         const chatWindow = document.getElementById('chatWindow');
         chatWindow.classList.toggle('open');
     }

     // Function to open the modal
function openModal() {
    document.getElementById("modal").classList.remove("hidden");
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  
  // Form submission handler (optional)
  document.getElementById("foundItemForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to demonstrate modal logic
    
    const itemDetails = document.getElementById("itemDetails").value;
    const itemPhoto = document.getElementById("itemPhoto").files[0];
  
    // Handle form submission logic (e.g., send data to server)
    alert(`Item Details: ${itemDetails}\nItem Photo: ${itemPhoto ? itemPhoto.name : 'No photo uploaded'}`);
  
    // Close the modal after submitting
    closeModal();
  });
  
