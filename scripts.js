const orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', submitOrder);

  function submitOrder(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const direInput = document.getElementById('direccion')
    const orderSelect = document.getElementById('menu-item');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const dire = direInput.value;
    const order = orderSelect.value;
    

    alert(`Pedido enviado:\nNombre: ${name}\nCorreo electrónico: ${email}\nTeléfono: ${phone}\nPedido: ${order}`);

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    direInput.value = '';
    orderSelect.value = '';
  }