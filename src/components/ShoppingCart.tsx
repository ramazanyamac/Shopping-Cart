import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CardItem } from "./CardItem";
import storeItems from "../data/items.json";

export const ShoppingCart = () => {
    const { closeCart, isOpen, cartItems } = useShoppingCart();
    return (
        <div
            className={
                isOpen
                    ? "fixed top-0 right-0 z-40 w-2/6 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none drop-shadow-xl"
                    : "fixed top-0 right-0 z-40 w-2/6 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 translate-x-full drop-shadow-xl"
            }
        >
            <div className="py-4 overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-black dark:text-white">Cart</h2>
                    <button
                        onClick={closeCart}
                        type="button"
                        data-drawer-hide="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 gap-3">
                    {cartItems.map((item) => (
                        <CardItem key={item.id} {...item} />
                    ))}
                </ul>
                <div className="block">
                    <p className="text-right dark:text-white text-black">
                        Total{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find((i) => i.id === cartItem.id);
                                return total + (item?.price || 0) * cartItem.quantity;
                            }, 0)
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
};
