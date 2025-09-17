import Button from "../Button/Button";

function ProductCard({ product }) {
    return (
        <div className="bg-bg border border-border rounded-md shadow overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="aspect-square bg-border flex items-center justify-center">
                <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                        className="object-contain w-full max-w-[300px]"
                />
            </div>

            <div className="p-3">
                {product.tag && (
                    <span className="inline-block px-2 py-1 text-xs rounded-md bg-primary text-white">
                        {product.tag}
                    </span>
                )}

                <h3
                    className="mt-1 text-base font-semibold text-text leading-tight line-clamp-2"
                    title={product.title}
                >
                    {product.title}
                </h3>

                <div className="flex items-center justify-between my-2">
                    <p className="font-bold text-primary">R$ {product.price}</p>
                    <p className="text-sm text-yellow-500">
                        {"★".repeat(product.rating)}
                    </p>
                </div>

                <Button variant="solid">Adicionar</Button>
            </div>
        </div>
    );
}

export default ProductCard;
