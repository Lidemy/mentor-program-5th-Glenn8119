## 請以自己的話解釋 API 是什麼
API 的全名是 Application Programming Interface，也就是應用程式介面，這個介面的功能是拿來讓生產者和需求者交換資料用的，有分為一般的 API 以及 WEB API。
API 的應用例子像是我們在終端機上寫 Javascript 的程式碼和系統讀取資料，如果沒有 API 是無法做到這件事情的，所以我們會說我們透過作業系統提供的 API 來讀取資料。
WEB API 顧名思義就是在網路上的 API，像蝦皮、Google、Twitch 等都有提供 API 給需要內部資料的人，而這些需求者需要按照著生產者提供的 API 使用文件內的格式和生產者進行資料互動。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
401 : 用戶端的請求需要經過授權，用戶端是有可能可以找到方法解決授權問題的
403 : 用戶端的請求需要經過授權，相較於 401 的狀態，403 用於伺服器知道用戶端的身分而告知用戶端無權限進入。
201 : 請求通過且資料建立成功，通常用於 POST 或 PUT 等請求的回應


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
回傳所有餐廳資料:
    GET https://www.restaurant.com
回傳單一餐廳資料:
    GET https://www.restaurant.com/id
刪除餐廳:
    DELETE https://www.restaurant.com/id
新增餐廳:
    POST https://www.restaurant.com
    提供參數 : { name : 餐廳名稱 }
    資料格式 : 'Content-type' : 'application/json'
更改餐廳:
    PATCH https://www.restaurant.com/id
    提供參數 : { name : 餐廳名稱 }
    資料格式 : 'Content-type' : 'application/json'
