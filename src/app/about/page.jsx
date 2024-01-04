import React from "react";
import styles from "./pages.module.css";
import Image from "next/image";
import Button from "@component/components/button/Button";

export default function About() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image src="/education.jpg" fill={true} className="object-cover grayscale"></Image>
        <div className="absolute bottom-5 left-5 text-xl p-3 bg-green-500 font-semibold rounded-md">
        <h1>Digital Storytellers</h1>
        <h2>Handcrafting award winning digital experiences</h2>
      </div>
      </div>
     
      <div className="flex gap-10">
        <div className="flex-1 mt-10 flex flex-col gap-6">
          <h1 className="text-xl">Who are we?</h1>
          <p className="text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non
            quaerat dolore suscipit sequi laudantium molestias aliquid at
            veritatis iusto neque, praesentium distinctio, sunt modi quos iste
            nemo porro incidunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis molestias esse dolore sit nulla hic,
            nostrum, ullam culpa animi similique quam ut dolor fuga quo rem
            laborum voluptas, delectus magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga dolorum quas nostrum esse, sint
            magnam repellat harum eligendi possimus officiis perspiciatis,
            adipisci voluptates omnis explicabo voluptas consectetur
            necessitatibus tempore? Magnam!
            <br></br>
            <br></br>
            sunt modi quos iste nemo porro incidunt. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Perspiciatis molestias esse dolore sit
            nulla hic, nostrum, ullam culpa animi similique quam ut dolor fuga
            quo rem laborum voluptas, delectus magnam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Fuga dolorum quas nostrum esse,
            sint magnam repellat harum eligendi possimus officiis perspiciatis,
            adipisci voluptates omnis explicabo voluptas consectetur
            necessitatibus tempore? Magnam!
          </p>
        </div>
        <div className="flex-1 mt-10 flex flex-col gap-6">
          <h1  className="text-xl">Who are we?</h1>
          <p className="text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non
            quaerat dolore suscipit sequi laudantium molestias aliquid at
            veritatis iusto neque, praesentium distinctio, sunt modi quos iste
            nemo porro incidunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis molestias esse dolore sit nulla hic,
            nostrum, ullam culpa animi similique quam ut dolor fuga quo rem
            laborum voluptas, delectus magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga dolorum quas nostrum esse, sint
            magnam repellat harum eligendi possimus officiis perspiciatis,
            adipisci voluptates omnis explicabo voluptas consectetur
            necessitatibus tempore? Magnam!
          </p>
          <Button url='./contact' text='Contact'></Button>
        </div>
      </div>
    </div>
  );
}
