const button = document.querySelector('button');

button.addEventListener('click', () => {
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted') new Notification('Ejemplo de botón');
  });
});

const button1 = document.querySelector('.button-1');

button1.addEventListener('click', () => {
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted')
      new Notification('Ejemplo de botón 1 con body', {
        body: 'Acá hay más información',
      });
  });
});

const button2 = document.querySelector('.button-2');

button2.addEventListener('click', () => {
  Notification.requestPermission().then((perm) => {
    if (perm === 'granted')
      new Notification('Ejemplo de botón 2', {
        body: 'Notificación con logo',
        icon: 'alert-png.png',
      });
  });
});
