function onInput(event) {
  const { email, message } = event.currentTarget.elements;
  userData.email = email.value.trim();
  userData.message = message.value.trimo;
}
