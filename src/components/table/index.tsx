interface Item {
    name: string;
    price: string;
}

interface Props {
    dataTables: any;
}

const TBody = (item: Item) => {
    return (
        <div className="flex">
            {/* Body Table */}
            <div className="w-2/4 bg-white p-4">
                <p className="text-2xl font-semibold text-left text-black font-mono">{item.name}</p>
            </div>
            <div className="w-2/4 bg-white p-4">
                <p className="text-2xl font-semibold text-left text-black font-mono">{item.price}</p>
            </div>
        </div>
    )
}

export default function Table (props: Props)  {
    return (
        <>
            <div className="flex">
                {/* Header Table */}
                <div className="w-2/4 bg-red-700 p-4">
                    <p className="text-2xl font-semibold text-left text-white font-mono">Tipe</p>
                </div>
                <div className="w-2/4 bg-red-700 p-4">
                    <p className="text-2xl font-semibold text-left text-white font-mono">Harga OTR</p>
                </div>
            </div>


            {props.dataTables.map((item: Item) => (
                <TBody key={item.price} name={item.name} price={item.price} />
            ))}
        </>
    )
}