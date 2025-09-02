import SearchButton from "./SearchButton.svg";
import Header from "../components/header";
import WelcomeButton from "../components/welcomeButton";
import logo from "./logo.png";
import user from "./user.svg";
import rename from "./rename.svg";
import likes from "./likes.svg";
import cart from "./cart.svg";
import zero from "./zero.svg";
import arrow from "./arrow.svg";
import Vector from "./Vector.svg";
import drinks from "./drinks.svg";
import picture from "./picture.svg";
import bootles from "./bootles.svg";
import triangles from "./triangle.svg";
import people from "./people.svg";
import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import big_bottles from "./big_bootles.svg";
import big_triangle from "./big_triangle.svg";
import Footer from "../components/footer";
const Home = ()=>{
    return(
        <div>
            <Header/>
            <div className="big_bar">
                <div className="bar">
                    <p>About Us</p>
                    <p>My Account</p>
                    <p>Wishlist</p>
                </div>
                <p className="services">We deliver to you every day from <span className="deliverytime">7:00 to 23:00</span></p>
            </div>
            <div className="jinstore">
                <img className="logo" src={logo} alt="fuck you bitch"/>
                <h1>JinStore</h1>
                <img className="rename" src={rename} alt="" />
                <p className="deliver">Deliver to<br></br> <span className="all">all</span></p>
                <input type="text" name="text" id="text" placeholder="Search for products, categories or brands..." className="searchbar"/>
                <img className="btn" src={SearchButton} alt=""/>
                <img className="user" src= {user} alt="" />
                <p className="signin">Sign In <br /><span className="account">Account</span></p>
                <img src={likes} alt="" />
                <img className="zero" src={zero} alt="" />
                <img className="signin" src={cart} alt="" />
                <img className="zero-" src={zero}alt="" />
                <hr />
            </div>
            <div className="home">
                <p>Home</p>
                <img className="arrow" src={arrow} alt="" />
                <p className="shop">Shop</p>
                <img className="arrow" src={arrow} alt="" />
                <p className="fruits">Fruits & Vegetables</p>
                < p className="fruits">Beverages</p>
                <p className="fruits">Blog</p>
                <p className="fruits">Contacts</p>
                <p className="trending">Trending Products</p>
                <img className="arrow" src={arrow} alt="" />
                <p className="almost">Almost Finished <span className="sale">Sale</span></p>
            </div>

            
            <div className="home-">
              <p className="home_">Home</p>
              <img className="vector" src={Vector} alt="" />
              <p>Blog</p>
            </div>
            <div className="overall_container">
            <div>
            <img className="drinks" src={drinks} alt="" />
            <p className="grocers">How grocers are approaching delivery as the market <br />evolves</p>
            <div className="nov">
              <p>November 3, 2023</p>
              <p className="store">Klbtheme, store, themeforest</p>
            </div>
            <p className="francais">Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,
            <br />och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper</p>
            <p className="more">Read More</p>
            </div>

            <div className="bloglist">
                <p className="listb">Blog post list</p>
                <div className="blogg">
                   <img className="pic" src={picture} alt="" />
                   <div>
                      <p>How grocers are approaching<br />delivey as the market<br />evolves</p>
                      <p className="nov2025">November 3, 2024</p>
                   </div>
                </div>
                   <div className="blogg">
                      <img className="pic" src={bootles} alt="" />
                      <div>
                        <p >The Friday Checkout: Food<br />insecurity keeps retailers off<br />balance</p>
                        <p className="nov2025">November 3, 2024</p>
                      </div>
                   </div>
                   <div className="blogg">
                    <img className="pic" src={triangles} alt="" />
                    <div>
                        <p>Consumer want grocer to use<br />AI to help them save money<br />Dunnhumby</p>
                        <p className="nov2025">November 3, 2024</p>
                    </div>
                   </div>
                   <div className="blogg">
                    <img className="pic-" src={people} alt="" />
                    <div>
                        <p>Order up! How grocers are<br />replicating the restaurant<br />experience in retail</p>
                        <p className="nov2025">November 3, 2025</p>
                    </div>
                   </div>
                   <p className="widget">Social Media Widget</p>
                   <img src={facebook} alt="" />
                   <img src={twitter} alt="" />
                   <img src={instagram} alt="" />
                   <img src={linkedin} alt="" />


                
          </div>
          </div>

          <div>
            <img className="drink" src={big_bottles} alt="" />
                    <p className="grocers">Friday Checkout: Food insecurity keeps retailers of<br />balance</p>
            <div className="nov">
              <p>November 3, 2023</p>
              <p className="store">Klbtheme, store, themeforest</p>
            </div>
            <p className="francais">Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br />och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper</p>
            <p className="more">Read More</p>
            </div>

            <div>
                <img className="drink" src={big_triangle} alt="" />
                       <p className="grocers">Consumer want AI to help them save money<br />DunnHumby</p>
            <div className="nov">
              <p>November 3, 2023</p>
              <p className="store">Klbtheme, store, themeforest</p>
            </div>
            <p className="francais">Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om än muren för fönde sijyv i vobba,<br />och hyng samt esam, plaheten. Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon sper</p>
            <p className="more">Read More</p>
            <div className="numbers">
              <p className="one">1</p>
              <p className="two">2</p>
              <p>&gt;</p>
            </div>
          </div>
            <Footer/>
        </div>
    )
}
export default Home;