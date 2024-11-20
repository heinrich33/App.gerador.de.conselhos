const adviceButton = document.querySelector('.conselho-update');
const adviceId = document.querySelector('.conselho-id');
const adviceDescription = document.querySelector('.conselho-descricao');

async function getAdvice()   
 {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const   
 formattedAdviceId = `Advice #${data.slip.id}`;
    const formattedAdviceText = `"${data.slip.advice}"`;
    adviceId.textContent = formattedAdviceId;
    adviceDescription.textContent = formattedAdviceText;
  } catch (error) {
    console.error('Error fetching advice:', error);
  }
}

adviceButton.addEventListener('click', getAdvice);