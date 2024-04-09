// Використовуючи делегуваня, відстежуй на формі подію input
// щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде "рядок"

// "feedback-form-state"

// Під час завантаження сторінки перевіряй стан сховища
// , і якщо там є збережені дані, то заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми - очищай сховище і поля форми, а також
// виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

// рефи записані в змінні

const feedbackFormEl = document.querySelector('.feedback-form');
const userData = {};

const fillFeedbackFormFields = () => {
  try {
    const userDataFromLs = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    if (userDataFromLs === null) {
      return;
    }

    for (const key in userDataFromLs) {
      if (feedbackFormEl.elements[key]) {
        feedbackFormEl.elements[key].value = userDataFromLs[key];
      }
    }
  } catch (error) {
    console.log(
      'Помилка парсингу даних користувача з локального сховища.',
      error
    );
  }
};

fillFeedbackFormFields();

const onFeedbackFieldChange = event => {
  event.preventDefault();

  const { target: feedbackFieldEl } = event;
  const feedbackFieldValue = feedbackFieldEl.value.trim();
  const feedbackFieldName = feedbackFieldEl.name;

  userData[feedbackFieldName] = feedbackFieldValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const onFeedbackFromSubmit = event => {
  event.preventDefault();
  console.log(userData);
  localStorage.removeItem('feedback-form-state');
  feedbackFormEl.reset();
};

feedbackFormEl.addEventListener('input', onFeedbackFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFromSubmit);
