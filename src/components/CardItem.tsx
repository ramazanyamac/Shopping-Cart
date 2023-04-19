import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CardItemProps = {
    id: number;
    quantity: number;
};

export const CardItem = ({ id, quantity }: CardItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    if (item === null) return null;
    return (
        <div className="flex items-center space-x-4 py-5">
            <div className="flex-shrink-0">
                <img className="w-20 h-20 object-cover" src={item?.imgUrl} alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {item?.name} {quantity > 1 && <span className="text-sm">{quantity}x</span>}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">{formatCurrency(item.price)}</p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {formatCurrency(item.price * quantity)}
            </div>
            <button
                onClick={() => removeFromCart(item.id)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                X
            </button>
        </div>
    );
};
