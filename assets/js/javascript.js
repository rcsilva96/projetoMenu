var prods = [
    { id: 1, name: "Produto 1", price: 1000.0 },
    { id: 2, name: "Produto 2", price: 2000.0 },
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;

    output.innerHTML = "";  
    
    for (var input of quantities) {
        var id = parseInt(input.id);
        var product = prods.find(p => p.id === id);

        if (product) {
            var quantity = parseFloat(input.value);
            var subtotal = product.price * quantity;
            total += subtotal;

            output.innerHTML += `Produto: ${product.name} - Preço: ${formatCurrency(product.price)} - Quantidade: ${quantity} - Subtotal: ${formatCurrency(subtotal)}<br>`;
        }
    }

    output.innerHTML += `<br>Total: ${formatCurrency(total)}`;
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
}
