const express = require("express");
const axios = require("axios");
const cors = require("cors"); // cors 모듈을 추가합니다.

const app = express();
const PORT = process.env.PORT || 3000;

// CORS 미들웨어를 사용하여 모든 도메인에서 요청을 허용합니다.
app.use(cors());

// 클라이언트 요청을 받아 네이버 API를 호출하고 결과를 전달하는 엔드포인트
app.get("/search-news", async (req, res) => {
    try {
        // 네이버 API에 보낼 요청 URL과 헤더 설정
        const url = "https://openapi.naver.com/v1/search/news.json";
        const query = req.query.query;
        const config = {
            params: {
                query: query,
                display: 10,
            },
            headers: {
                "X-Naver-Client-Id": "XQG8YPtEE5TunPmqC_Gf",
                "X-Naver-Client-Secret": "EgT8qwVWE6",
            },
        };

        // 네이버 API에 요청을 보내고 결과를 클라이언트에게 전달
        const response = await axios.get(url, config);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
