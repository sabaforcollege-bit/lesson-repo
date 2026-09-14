import { useListContext } from './ListContext';

export function ItemList() {
    const { items } = useListContext();

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}