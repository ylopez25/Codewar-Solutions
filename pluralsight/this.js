function Product(id, name, cost, price) {
    this.productId = id;
    this.name = name;
    this.listPrice =price;
    this.standardCost = cost;
    this.grossProfit = function () {
        return this.listPrice - this.standardCost
    }
}

function constuct() {
    let prod= new Product(2,'22', 4,5)
    console.log(prod.grossProfit())
}
