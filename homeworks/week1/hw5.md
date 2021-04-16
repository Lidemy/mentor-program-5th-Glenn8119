## 請解釋後端與前端的差異。
前端的成果是user可以接觸到的所有東西，包括搜尋、show出資料、網頁互動功能 (點擊、hover等等)
後端是建立資料庫，並負責server與資料庫的互動

例如當user在網路上搜尋apple的時候，瀏覽器會透過網路將apple這個關鍵字發送一個request到google的server，server到資料庫拿資料後發送一個response給瀏覽器並show出資料

上述的例子以server為分界前端負責發送request到server並在server拿到request後表現在瀏覽器的部分
後端負責的部分是收到request後server和資料庫拿資料的這個過程

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器想先知道google的這個Domain的IP位址在哪裡，於是先發送一個request給DNS搜尋
2. DNS得到結果後將結果回傳給瀏覽器"xxx.xx.xxx.x"
3. 瀏覽器以Javascript這個關鍵字向"xxx.xx.xxx.x"發送request
4. google server到後端的資料庫去找答案
5. 找到答案之後google server將request發送給瀏覽器
6. 瀏覽器將結果以人看得懂的形式顯示在介面上


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
calc : 開啟小算盤
time : 顯示現在時間
fc file1 file2: 比較兩個檔案的差異
常用的老師上課都已經教完了, 就找到這些超冷門的XD