async function fetchReviews() {
  try {
    const response = await fetch('YOUR_FIREBASE_FUNCTION_URL');
    const data = await response.json();
    displayReviews(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
}

function displayReviews(data) {
  const reviewsContainer = document.getElementById('reviews');

  // Google Play Store와 App Store의 리뷰를 모두 가져와서 표시합니다.
  for (const reviewData of data.googlePlay.concat(data.appStore)) {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <h3>${reviewData.title}</h3>
      <p>${reviewData.author}</p>
      <p>${reviewData.rating} / 5</p>
      <p>${reviewData.date}</p>
      <p>${reviewData.text}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  }
}

fetchReviews();
