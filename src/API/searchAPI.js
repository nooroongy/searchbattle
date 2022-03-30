const searchAPI = {
    get: async ({ startDate = '2021-01-01', endDate = '2022-03-28', keywordGroups }) => {
        return await fetch('https://mysterious-falls-90128.herokuapp.com/https://openapi.naver.com/v1/datalab/search', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "X-Naver-Client-Id": 'jkwZRh8IZJYsUt3Eonaq',
                "X-Naver-Client-Secret": 'fXCTahKmHB'
            },
            body: JSON.stringify({
                startDate,
                endDate,
                timeUnit: 'date',
                keywordGroups,
                // device:'pc',
                // ages:[2,3],
                // gender:'f',
            })
        }).then(res => res.json()).then(res=>res.results)
    }
}

export default searchAPI;