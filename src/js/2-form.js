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
    const userDataFromLs = JSON.parse(localStorage.getItem('userFeedbackInfo'));
    if (userDataFromLs === null) {
      return;
    }

    for (const key in userDataFromLs) {
      feedbackFormEl.elements[key].value = userDataFromLs[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFeedbackFormFields();

const onFeedbackFieldChange = event => {
  event.preventDefault();
  const { target: feedbackFieldEl } = event;
  // console.log(feedbackFieldEl);
  const feedbackFieldValue = feedbackFieldEl.value;
  const feedbackFieldName = feedbackFieldEl.name;
  // console.log('name: ', feedbackFieldName);
  // console.log('value: ', feedbackFieldValue);

  userData[feedbackFieldName] = feedbackFieldValue;

  localStorage.setItem('userFeedbackInfo', JSON.stringify(userData));
};

const onFeedbackFromSubmit = event => {
  event.preventDefault();
  console.log(userData);
  localStorage.removeItem('userFeedbackInfo');
  feedbackFormEl.reset();
};

feedbackFormEl.addEventListener('change', onFeedbackFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFromSubmit);
