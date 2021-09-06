import React from 'react'

 const Blog = () => {
   setTimeout(() => {
     debugger;
     var elem = document.getElementById("loginButton");
     if (elem) {
       elem.textContent = "Log Out";
       elem.style.marginRight = "4em";
     }

     var elem2 = document.getElementById("signupButton");
     if (elem2) {
       elem2.parentNode.removeChild(elem2);
     }

     if (localStorage.getItem("token")) {
     } else {
       document.getElementById("loginButton").click();
     }
   }, 0);
    return (
      <div className="Blog_back">
        <div className="blog_header">
          <img className="addd" src="/images/ramazanAdd.gif"></img>
        </div>
        <div className="blogg">
          <div className="left_blog">
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/paulimage.jpg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.pakwheels.com/blog/video-paul-walkers-fast-furious-supra-sold-for-550000/"
                >
                  <h2 className=" blog_heading blink_blog">
                    Paul Walker’s Fast & Furious Supra Sold For Over Rs8.5 Crore
                  </h2>
                </a>
                <p className="blog_time_des">June 12, 2021</p>
                <p className="blog_para">
                  If you are a fan of the Fast & Furious movies, do you remember
                  a drag race scene in the first movie between a Toyota Supra
                  and Ferrari F355 Spider? Obviously, the hero (Paul Walker)
                  wins the race in the end with Vin Diesel in the passenger
                  seat. The same car has recently been auctioned for huge
                  $550,000 (PKR 86,598,380), showing the fanbase of Paul Walker
                  and this car.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/imageblog2.jpg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.returnofthecaferacers.com/yamaha-motorcycle-cafe-racer/stu-lloyd-sr500/"
                >
                  <h2 className=" blog_heading blink_blog">
                    Smart Single – Stu Lloyd Yamaha SR500 e
                  </h2>
                </a>
                <p className="blog_time_des">July 15, 2021</p>
                <p className="blog_para">
                  Stu Lloyd grew up in the UK during the late ’70s and early
                  ’80s. As a young boy, his leisure time was devoted to
                  wrenching, tuning, and crashing two strokes. He was what the
                  British press labelled as a “two-stroke hooligan” causing
                  mischief on his Kawasaki KH 250s and Yamaha RD LCs. Back then
                  life was all about maximising his time on two wheels.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/imageblog3.jpg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.motorcyclenews.com/news/motorbike-crime/"
                >
                  <h2 className=" blog_heading blink_blog">
                    Ace day out for Op Venice as officers attend crime-busting
                    Motorcycle Awareness Day
                  </h2>
                </a>
                <p className="blog_time_des">August 01, 2021</p>
                <p className="blog_para">
                  Officers from the Met’s Op Venice team were on hand to
                  showcase the bikes they use to chase down criminals in London
                  – the slimline BMW F750GS and the more commonly seen R1250RTP
                  – and were keen to give advice on keeping bikes safe. "We are
                  really pleased that the Ace invited us to this event. We take
                  every opportunity to speak to bikers about protecting their
                  motorcycles and powered two-wheelers,"
                </p>
              </div>
            </div>
            {/*  */}
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/imageblog44.jpg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.returnofthecaferacers.com/motorcycle-helmet/bell-eliminator-2021/"
                >
                  <h2 className=" blog_heading blink_blog">
                    2021 Bell Eliminator Helmet Range
                  </h2>
                </a>
                <p className="blog_time_des">May 26, 2021</p>
                <p className="blog_para">
                  The Bell Eliminator Helmet hit shelves a couple of years ago
                  and has been a huge success for the brand. It perfectly
                  combined aggressive lines with a unique retro look and the
                  latest modern safety tech. Inspired by auto-racing styles from
                  the past it had the right look for today’s retro obsessed
                  market. And, to top it all off, it was backed by Bell Helmets
                  60 years of helmet making history. For 2021 Bell has continued
                  to expand on the Eliminator range with the introduction of 2
                  new colourways and the introduction of a unique custom paint
                  service.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/imageblog5.jpg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.returnofthecaferacers.com/motorcycle-boots/revit-yukon/"
                >
                  <h2 className=" blog_heading blink_blog">
                    Rev’it! Yukon water-repellent boots
                  </h2>
                </a>
                <p className="blog_time_des">December 19, 2021</p>
                <p className="blog_para">
                  Inspired by vintage worker footwear the Rev’it! Yukon boots
                  boast an all-leather suede upper that features a pre-worn
                  patina. Adding to this riding boots classic good looks is a
                  moc-toe cut that’s been in style since the early 1950s. Here
                  Rev’it! has combined that look with practical features to make
                  this boot well-suited to both on and off the bike use.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="left_card">
              <div className="blog_img">
                <a href="petrol_image">
                  <img
                    className="petrol_image"
                    src="/images/bmwBlog.png"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="small_box_left_para">
                <a
                  className="blog_heading"
                  href="https://www.pakwheels.com/blog/get-ready-for-strict-driving-license-test-in-islamabad/"
                >
                  <h2 className=" blog_heading blink_blog">
                    BMW Motorbikes Launching In Pakistan
                  </h2>
                </a>
                <p className="blog_time_des">Marach 15, 2021</p>
                <p className="blog_para">
                  In recent times, the automobile market in Pakistan has seen
                  many reasons to celebrate. These include, but are not limited
                  to multiple international automobile manufacturers entering
                  the domestic market and the introduction of a wide range of
                  SUVs and sedans. The most recent development in this regard
                  came with MG Motors entering the domestic Pakistani auto
                  market.
                </p>
              </div>
            </div>
            <div class="pagination">
              <a href="#">&laquo;</a>
              <a class="active" href="#">
                1
              </a>
              <a href="/Blog">2</a>
              <a href="/Blog">3</a>
              <a href="/Blog">4</a>
              <a href="/Blog">5</a>
              <a href="/Blog">6</a>
              <a href="/Blog">&raquo;</a>
            </div>
          </div>

          {/* right side of blog All */}
          <div className="right_blog">
            <div className="right_card">
              <div className="latest_news_blog">Latest News</div>
              <div className="blog_about">
                <a href="https://www.returnofthecaferacers.com/bmw-motorcycles-cafe-racer/an-bu-k100/">
                  <img
                    className="blog_latest_news_image"
                    src="/images/imageblog6.jpg"
                    alt="logo"
                  />

                  <h1 className="latest_blog_para">
                    An-Bu Customs BMW K100 RS
                  </h1>
                </a>
              </div>
              <p className="latest_blog_description">
                For many years the United States was the biggest source of
                inspiration for custom motorcycle builders around the world.
                Then during the first decade of the 21st century, another
                country’s custom scene began to catch everyone’s attention.
                Unbeknownst to pretty much everyone outside of Japan, the
                country had an incredible custom motorcycle scene full of highly
                skilled builders and a huge aftermarket parts industry.
              </p>
            </div>
            <div className="right_small_card">
              <div className="popular_tags_blog">Popular Tags</div>
              <div className="tags_blog_button_1">
                <button className="tags_blog_button button_hash_tag">
                  Suzuki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Honda
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Yamaha
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Kawasaki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  United
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Unique
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Crown
                </button>
                <button className="tags_blog_button button_hash_tag">
                  BMW
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Suzuki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Honda
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Yamaha
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Kawasaki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  United
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Unique
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Crown
                </button>
                <button className="tags_blog_button button_hash_tag">
                  BMW
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Suzuki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Honda
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Yamaha
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Kawasaki
                </button>
                <button className="tags_blog_button button_hash_tag">
                  United
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Unique
                </button>
                <button className="tags_blog_button button_hash_tag">
                  Crown
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog;
