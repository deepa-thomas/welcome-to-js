let didConfirm = confirm('yes?');

let message;
if (didConfirm === true) {
  message = 'ok';
} else {
  message = 'no';
}

alert(message);
