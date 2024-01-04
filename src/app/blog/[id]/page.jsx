import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{ next: { revalidate: 10 } });

    if (!res.ok) {
      return notFound()
    }

    return res.json();
  }


  const data = await getData(params.id);
  console.log(data)
  return (
    <div>
        <div  key={data._id} className="flex justify-between my-4">
          <div className="flex-1">
            <Image
              src="https://picsum.photos/seed/picsum/500/300"
              alt=""
              width={400}
              height={250}
              className="object-contain"
            ></Image>
          </div>
          <div className="flex-1">
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        </div>
    </div>
  );
}
