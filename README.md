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
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/0de52721-6797-4441-b9e6-80076d02fe75)


2.start Server side โดยพิมคำสั่ง npm start ถ้าสำเร็จจะขึ้น Running on port 4000
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/50e36e7a-1a5f-4d72-b1d6-28c5a9020f07)
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/a4cf74ff-d0a1-488a-8c82-82539c464f54)


MongoDB
--------------------------------------------------------------
1.ติดตั้ง MongoDB Compass ตามลิงค์นี้ https://www.mongodb.com/try/download/community กด Select package และกด Download จากนั้นติดตั้ง
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/b9ddfd81-05b8-40fb-a9d9-809ee2818211)
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/7a6c1eb5-6eb1-4df4-81d2-c6a5909b1d53)


2.เมื่อติดตั้งเสร็จแล้ว กด connect จะได้หน้าต่างดังภาพต่อไปนี้ เป็นอันเสร็จเรียบร้อย
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/db3efa9d-9271-40a3-bd3a-9fcbe11676f0)
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/7019c918-7cc4-4c86-a108-4475c3526808)


URL connect api and MongoDB
--------------------------------------------------------------
1.ไฟล์ api เข้าไปยัง .env จะพบ Url_Mongodb ต้องตรงกับ URL ของ MongoDB [blog คือ เมื่อมีการเพิ่มข้อมูลจะสร้าง database ที่มีชื่อว่า blog]
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/a4f6cf9d-ce75-4452-8d81-6b7d9b76a576)
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/b6d0dbc5-f6fb-48d5-8f57-93c5fa3b7b2a)

Client
--------------------------------------------------------------
1.เปิด Terminal และเข้าไปยัง client โดยพิมพ์ cd client
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/b568f098-89d6-4cb4-832b-2cedf605b16a)

2.run ReactJs โดยการพิมพ์คำสั่ง npm run dev และเปิดหน้าเว็ปในลิงค์ Local โดยกด Ctrl+Click
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/bcc412c9-9881-4859-b268-9f1e1951f67c)


Api(npm start) และ Client(npm run dev) ต้อง run พร้อมกัน พร้อมทั้ง connect MongoDB
![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/51e5274b-0330-4816-afd5-23ba978f9fea)
![Captures](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/364c8b65-9b85-4af4-9f5d-73e049499ca1)

การใช้งาน Blog Website
--------------------------------------------------------------
1.การเลิอกดูบล็อก
--------------------------------------------------------------
![Capturessss](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/0147968e-c1f1-4275-b76e-852ba72cc08d)
ได้จากเส้นสีแดง


2.การเพิ่มข้อมูล
--------------------------------------------------------------
  2.1 เริ่มจากทำการสมัครสมาชิกให้สำเร็จโดยการ
  --------------------------------------------------------------
  ![Capturess](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/d5a2a3f7-6426-45d5-abe3-2e0eb723d6cf)
  ![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/01f39f2b-8464-4bc7-b5e4-2d6169d87c8a)


  2.2 เพิ่มข้อมูล
  --------------------------------------------------------------
  เลือกบล็อกที่จะสร้าง แล้วเพิ่มข้อมูล
  ![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/05220311-234f-4083-8d40-69ca69484a86)
  ![image](https://github.com/KongPongsathon/WebsiteBlog/assets/167407098/3094f75f-b437-4c89-92ed-f28877dec883)

