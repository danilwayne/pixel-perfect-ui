import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  { img: product1, name: "Ração Premium", price: "R$ 89,90" },
  { img: product2, name: "Brinquedos Pet", price: "R$ 29,90" },
  { img: product3, name: "Shampoo & Higiene", price: "R$ 39,90" },
  { img: product4, name: "Cama & Acessórios", price: "R$ 149,90" },
];

const Products = () => (
  <section id="products" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
          — Products
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
          PRODUCTS FOR YOUR<br />BEST FRIENDS
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                {p.name}
              </h3>
              <p className="text-primary font-bold text-lg">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
