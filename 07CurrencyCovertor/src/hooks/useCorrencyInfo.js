import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    console.log(currency)
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((data) => setData(data[currency]))
        .catch((err) => console.log(`Error: ${err}`))

        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyInfo;