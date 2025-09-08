export default function BestSellerCard() {
    const products = [
        "/assets/bestseller1.jpg",
        "/assets/bestseller2.jpg",
        "/assets/bestseller3.jpg",
        "/assets/bestseller4.jpg",
        "/assets/bestseller5.jpg",
        "/assets/bestseller6.jpg",
        "/assets/bestseller7.jpg",
        "/assets/bestseller8.jpg"
    ]

    return (
        <div>
            <p>Featured Products</p>
            <p>BESTSELLER PRODUCTS</p>
            <p>Problems trying to resolve the conflict between</p>

            <div>
                {products.map((elm, index) => {
                    return (
                        <div></div>
                    )
                })}
            </div>
        </div>
    )
}