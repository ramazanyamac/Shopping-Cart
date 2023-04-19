import storeData from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export const Store = () => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold my-3">Store</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                {storeData.map((data) => (
                    <StoreItem {...data} key={data.id} />
                ))}
            </div>
        </div>
    );
};
