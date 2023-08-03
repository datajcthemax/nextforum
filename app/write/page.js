//  app/write/page.js

export default async function Write() {
    return (
      <div className="p-20">
        <form action="/api/post/new" method="POST">
          <input name="title" placeholder="글제목"/>
          <input name="content" placeholder="글내용"/>
          <button type="submit">전송</button>
        </form>
      </div>
    )
  }

// 유저가 input에 글제목과 글내용을 작성하고 글등록 버튼을 누르면 db에 저장해 주는 기능을 만들고싶어
// let db = (await connectDB).db('nextforum')
// let result = await db.collection('post')