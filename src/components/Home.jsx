import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore maiores expedita iusto consectetur dicta!</p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, fugiat. Aliquam tempora aspernatur provident, autem cum animi esse culpa laudantium hic, reprehenderit maxime porro unde dolores quisquam accusantium quod obcaecati molestiae placeat possimus! Praesentium laboriosam dolor perferendis quibusdam, libero, nihil blanditiis earum est omnis fugit doloribus vel fugiat aperiam, laudantium repudiandae placeat. Voluptas nesciunt vero aliquid? Architecto ad similique repudiandae ipsam doloribus neque illum blanditiis, eius cupiditate aspernatur tempora dolore voluptatum eveniet sed facilis sapiente nostrum, tenetur nihil reprehenderit vero aut, explicabo itaque animi. Hic assumenda rem et, quam numquam omnis voluptate alias tempore, aperiam nobis consequuntur similique. Fugiat, architecto?</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
            }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay: "0.7s",
            }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay: "1s",
            }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home