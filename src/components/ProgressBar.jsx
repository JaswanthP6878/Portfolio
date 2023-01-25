function Progressbar ( {data, name}) {

    return (
        <div className="p-2">
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${data.level}%`}}> {data.level}%</div>
            </div>
            <div className = "font-medium">{data.name}</div>
        </div>
    )
}

export default Progressbar;