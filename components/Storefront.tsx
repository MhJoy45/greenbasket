"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Leaf, Menu, Search, ShoppingBag, Plus, Minus, X, CheckCircle2, Truck, ShieldCheck, Sprout } from "lucide-react";

type Product = { id: number; name: string; category: string; price: number; unit: string; image: string; tag?: string; };
const products: Product[] = [
  { id: 1, name: "Organic Avocados", category: "Fresh Produce", price: 180, unit: "2 pcs", image: "https://images.unsplash.com/photo-1523042836067-9a6b3c6d4c2f?auto=format&fit=crop&w=900&q=85", tag: "BESTSELLER" },
  { id: 2, name: "Farm Fresh Tomatoes", category: "Fresh Produce", price: 95, unit: "500 g", image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "Raw Forest Honey", category: "Pantry", price: 320, unit: "250 g", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", tag: "PURE & RAW" },
  { id: 4, name: "Organic Green Spinach", category: "Fresh Produce", price: 65, unit: "1 bunch", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Almond Oat Milk", category: "Dairy Alternatives", price: 240, unit: "1 litre", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Seasonal Fruit Box", category: "Fruit Boxes", price: 450, unit: "1 box", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=900&q=85", tag: "FARM PICK" },
];

const categories = ["All", "Fresh Produce", "Pantry", "Dairy Alternatives", "Fruit Boxes"];

export default function Storefront() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<Record<number, number>>({});
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => products.filter(p => (category === "All" || p.category === category) && p.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
  const add = (id: number) => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const change = (id: number, amount: number) => setCart(c => ({ ...c, [id]: Math.max(0, (c[id] || 0) + amount) }));

  return (
    <main>
      <div className="announcement"><span>FRESH FROM THE FARM</span><i /> Free delivery on orders over ৳1,500 <a href="#shop">Shop now <ArrowRight size={13}/></a></div>
      <header className="header">
        <a className="logo" href="#"><span className="logo-icon"><Leaf size={22}/></span><span>green<span className="logo-light">basket</span><small>GOOD FOOD. GOOD MOOD.</small></span></a>
        <nav className={mobileMenu ? "nav nav-open" : "nav"}>
          <a href="#shop" onClick={() => setMobileMenu(false)}>Shop</a><a href="#story" onClick={() => setMobileMenu(false)}>Our story</a><a href="#promise" onClick={() => setMobileMenu(false)}>Our promise</a><a href="#reviews" onClick={() => setMobileMenu(false)}>Reviews</a>
        </nav>
        <div className="header-actions"><button className="search-btn" aria-label="Search"><Search size={19}/></button><button className="cart-btn" onClick={() => setCheckoutOpen(true)}><ShoppingBag size={18}/> <span>Cart</span><b>{count}</b></button><button className="menu-btn" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X/> : <Menu/>}</button></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> REAL FOOD. REAL GOOD.</div>
          <h1>Eat fresh.<br/><em>Live</em> well.</h1>
          <p className="hero-desc">Better food starts with better choices. Discover farm-fresh organic goodness, picked with care and delivered to your door.</p>
          <div className="hero-buttons"><a className="btn-primary" href="#shop">Shop fresh picks <ArrowRight size={18}/></a><a className="text-link" href="#story">Our growing story <span>↗</span></a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>🥑</span><span>🥬</span><span>🍅</span></div><div><strong>2,500+ happy homes</strong><small>choosing a fresher way to eat</small></div><div className="proof-stars">★★★★★ <small>4.9/5</small></div></div>
        </div>
        <div className="hero-visual"><div className="hero-image"/><div className="fresh-stamp"><Sprout size={22}/><span>GROWN<br/>WITH CARE</span></div><div className="hero-note"><span className="note-dot"/> PICKED FRESH, DELIVERED FRESH</div><div className="hero-leaf leaf-one">✳</div><div className="hero-leaf leaf-two">✳</div></div>
        <div className="hero-bottom"><span>01 — 04</span><span className="scroll-line"/><span>SCROLL TO EXPLORE</span><span className="hero-bottom-right">NOURISH YOUR EVERYDAY</span></div>
      </section>

      <section className="benefits" id="promise">
        <div><span className="benefit-icon"><Sprout/></span><strong>Grown with care</strong><small>Thoughtful farming practices</small></div>
        <div><span className="benefit-icon"><Truck/></span><strong>Fresh to your door</strong><small>Carefully packed and delivered</small></div>
        <div><span className="benefit-icon"><ShieldCheck/></span><strong>Quality you can trust</strong><small>Selected for freshness and taste</small></div>
        <div><span className="benefit-icon"><Leaf/></span><strong>Goodness in every bite</strong><small>Simple, wholesome ingredients</small></div>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-top"><div><div className="eyebrow"><span className="eyebrow-line"/> THE GOOD STUFF</div><h2>Fresh picks for<br/><em>everyday living.</em></h2></div><p>From crisp greens to pantry favourites, bring home food that makes you feel good.</p></div>
        <div className="shop-toolbar"><div className="filters">{categories.map(c => <button key={c} className={category === c ? "filter active" : "filter"} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="product-search"><Search size={16}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Find something fresh"/></label></div>
        <div className="product-grid">{filtered.map(p => <article className="product-card" key={p.id}><div className="product-image" style={{backgroundImage: `url("${p.image}")`}}>{p.tag && <span className="product-tag">{p.tag}</span>}<button className="quick-add" onClick={() => add(p.id)} aria-label={`Add ${p.name}`}><Plus size={20}/></button></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><div className="product-bottom"><div><strong>৳{p.price}</strong><small> / {p.unit}</small></div><button className="add-button" onClick={() => add(p.id)}>Add to cart <Plus size={15}/></button></div>{(cart[p.id] || 0) > 0 && <div className="quantity"><button onClick={() => change(p.id, -1)}><Minus size={13}/></button><span>{cart[p.id]} in cart</span><button onClick={() => add(p.id)}><Plus size={13}/></button></div>}</div></article>)}</div>
        {filtered.length === 0 && <div className="empty-state">No products found. Try another search.</div>}
        <div className="shop-bottom"><span>SHOWING {filtered.length} FRESH FINDS</span><a href="#shop">EXPLORE THE GOODNESS <ArrowRight size={15}/></a></div>
      </section>

      <section className="story" id="story"><div className="story-photo"><div className="story-photo-label">FROM OUR FARM PARTNERS <span>✳</span></div></div><div className="story-copy"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT US</div><h2>Good food<br/>should feel<br/><em>this simple.</em></h2><p>We believe the best meals begin with ingredients you can feel good about. That’s why we work with trusted growers and choose every item for freshness, flavour and quality.</p><a className="btn-primary" href="#shop">Discover our picks <ArrowRight size={18}/></a><div className="story-sign">GROWN WITH GOOD INTENTIONS <span>✳</span></div></div></section>

      <section className="quote-section" id="reviews"><div className="quote-mark">“</div><p>Fresh food, thoughtful choices, and a little more goodness in every day.</p><div className="quote-credit">THE GREEN BASKET WAY <span>★★★★★</span></div></section>
      <section className="newsletter"><div><div className="eyebrow"><span className="eyebrow-line"/> A FRESH NOTE FROM US</div><h2>Good things grow<br/><em>in your inbox.</em></h2><p>Get seasonal picks, simple food ideas and first dibs on fresh arrivals.</p></div><form onSubmit={e => { e.preventDefault(); alert("Thanks for joining Green Basket!"); }}><input type="email" required placeholder="Your email address"/><button type="submit">Join the list <ArrowRight size={17}/></button><small>NO SPAM. JUST THE GOOD STUFF.</small></form></section>
      <footer><a className="logo footer-logo" href="#"><span className="logo-icon"><Leaf size={22}/></span><span>green<span className="logo-light">basket</span><small>GOOD FOOD. GOOD MOOD.</small></span></a><span>© 2026 Green Basket. Made for fresher days.</span><div><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#promise">Our promise</a></div></footer>

      {checkoutOpen && <div className="modal-backdrop" onClick={() => setCheckoutOpen(false)}><div className="checkout-modal" onClick={e => e.stopPropagation()}><div className="modal-head"><div><span className="eyebrow">YOUR FRESH FINDS</span><h2>Your basket</h2></div><button className="close-btn" onClick={() => setCheckoutOpen(false)}><X/></button></div>{count === 0 ? <div className="empty-cart"><ShoppingBag size={34}/><h3>Your basket is looking fresh and empty.</h3><p>Add a few favourites to get started.</p><button className="btn-primary" onClick={() => setCheckoutOpen(false)}>Explore products</button></div> : <><div className="cart-lines">{products.filter(p => cart[p.id]).map(p => <div className="cart-line" key={p.id}><div className="cart-thumb" style={{backgroundImage: `url("${p.image}")`}}/><div className="cart-line-name"><strong>{p.name}</strong><small>৳{p.price} / {p.unit}</small><div className="quantity"><button onClick={() => change(p.id, -1)}><Minus size={13}/></button><span>{cart[p.id]}</span><button onClick={() => add(p.id)}><Plus size={13}/></button></div></div><b>৳{p.price * cart[p.id]}</b></div>)}</div><div className="cart-total"><span>Subtotal</span><strong>৳{total.toLocaleString("en-BD")}</strong></div><p className="delivery-note">Delivery fee, if applicable, will be confirmed with your order.</p><form className="checkout-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); setCart({}); }}><h3>Delivery details</h3><input required placeholder="Full name"/><input required type="tel" placeholder="Phone number"/><textarea required placeholder="Delivery address" rows={2}/><button className="checkout-submit" type="submit">Place demo order · ৳{total.toLocaleString("en-BD")} <ArrowRight size={17}/></button><small>DEMO CHECKOUT — NO PAYMENT OR ORDER IS SENT.</small></form></>}{submitted && <div className="success-message"><CheckCircle2/> Demo order submitted. No order was sent or stored.</div>}</div></div>}
    </main>
  );
}
