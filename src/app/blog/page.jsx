'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useSWR from 'swr';

export default function Blog() {
  // async function getData() {
  //   const res = await fetch("http://localhost:3000/api/posts");

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch data");
  //   }

  //   return res.json();
  // }
  // const datas = await getData(); 
  // console.log(datas)
  const fetcher =  (...args) => fetch(...args).then(res => res.json())


  const { data, error, isLoading } = useSWR('http://localhost:3000/api/posts', fetcher)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data)
  return (
    <div>
      {data.map((dat) => (
        <Link href={`/blog/${dat._id}`} key={dat._id} className="flex justify-between my-4">
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
            <h1>{dat.title}</h1>
            <p>{dat.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
