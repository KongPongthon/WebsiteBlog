Blog Review CRUD Project
--------------------------------------------------------------
My first project website CRUD application for the blog online, created by ReactJS, Tailwind CSS, Node.js (Express.js), and MongoDB. Thank you for your attention.


How to use
--------------------------------------------------------------
วิธีการติดตั้งสำหรับการใช้งาน Blog Review
--------------------------------------------------------------
Api
--------------------------------------------------------------
1.เปิด Terminal และเข้าไปยังไฟล์ api โดยพิมพ์ cd api
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/f78b881f-e5d8-4d2e-9fe3-92eb45223a38)



2.start Server side โดยพิมคำสั่ง npm start ถ้าสำเร็จจะขึ้น Running on port 4000
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/aeaea5ba-2057-43ed-b6f5-f2c6f7d6ab55)
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/dcafac71-495c-4284-9950-14f5a78f96e2)



MongoDB
--------------------------------------------------------------
1.ติดตั้ง MongoDB Compass ตามลิงค์นี้ https://www.mongodb.com/try/download/community กด Select package และกด Download จากนั้นติดตั้ง
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/3d9b8167-4190-4f62-8321-4f26c8a80540)
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/149e3a44-9122-484a-a76b-34cb53c5c14f)



2.เมื่อติดตั้งเสร็จแล้ว กด connect จะได้หน้าต่างดังภาพต่อไปนี้ เป็นอันเสร็จเรียบร้อย
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/9e27a319-8144-4065-bb78-3c29d762caf7)
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/814a4a1c-c9fd-4517-ba93-76cbeea2a892)



URL connect api and MongoDB
--------------------------------------------------------------
1.ไฟล์ api เข้าไปยัง .env จะพบ Url_Mongodb ต้องตรงกับ URL ของ MongoDB [blog คือ เมื่อมีการเพิ่มข้อมูลจะสร้าง database ที่มีชื่อว่า blog]
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/427959c9-5561-414f-bb0f-4f2f291f383a)
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/a2a163ab-a97a-4fca-955a-b232cd5d6af4)


Client
--------------------------------------------------------------
1.เปิด Terminal และเข้าไปยัง client โดยพิมพ์ cd client
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/a995b8c0-ad0b-4c17-bd33-d28ffeaecdcf)


2.run ReactJs โดยการพิมพ์คำสั่ง npm run dev และเปิดหน้าเว็ปในลิงค์ Local โดยกด Ctrl+Click
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/77a61450-67c1-48e9-87f2-d7767949709e)



Api(npm start) และ Client(npm run dev) ต้อง run พร้อมกัน พร้อมทั้ง connect MongoDB
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/91d1cbfa-8f08-4342-b0e7-0e8623ae3d0d)
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/3073ccd4-7bd6-49cd-88c9-9eeb99e49b41)


การใช้งาน Blog Website
--------------------------------------------------------------
1.การเลือกดูบล็อก
--------------------------------------------------------------
![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/1d79d2b3-3f88-4fe8-9aa8-c0f4925db180)
ได้จากเส้นสีแดง


2.การเพิ่มข้อมูล
--------------------------------------------------------------
  2.1 เริ่มจากทำการสมัครสมาชิกให้สำเร็จโดยการ
  --------------------------------------------------------------
  ![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/1a3da48b-52a0-4bea-97e5-4bc79e3a8b75)
  ![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/2414e437-5fea-4fd0-8320-7ca76a8120ef)



  2.2 เพิ่มข้อมูล
  --------------------------------------------------------------
  เลือกบล็อกที่จะสร้าง แล้วเพิ่มข้อมูล
  ![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/4d7284fe-1c4b-47d6-bcfb-b359c7273ed0)
  ![image](https://github.com/KongPongthon/WebsiteBlog/assets/98639367/a53481b8-b275-4980-84ac-ebbb36c74d30)



