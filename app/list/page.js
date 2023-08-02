

import { connectDB } from "@/util/database"
import Link from 'next/link'  // Link 컴포넌트를 import 해줍니다.
import DetialLink from "./DetailLink"

export default async function List() {

    const db = (await connectDB).db("nextforum")
    let result = await db.collection('post').find().toArray()

    return (
    <div className="list-bg">
        { result.map((a, i)=>{
            return(
                <div className="list-item" key={i}>
                    <Link href={`/detail/${a._id}`}> 
                            <h4>{a.title}</h4>
                    </Link>
                    <DetialLink />
                    <p>1월 1일</p>
                </div>
            )
        }
        
      ) }
    </div>
    )
  } 
