import { h } from "preact";
import style from "./style";

const Home = () => (
  <div class={style.home}>
    <div className="card bg-dark ">
      <div className="card-header">
      <h1 className="card-title">Preact Playground</h1>
      <h3 className="card-subtitle text-center lead">Featuring Bootstrap 5</h3>
      </div>
      <div className="card-body">
      <p className="card-text">
        Welcome to my exploration of Preact, the lighter alternative to React! <br/><br/>
        I am using this site as a 'playground' to experiment with Preact, based on the template available through{" "}
        <a href="vercel.com" className='card-link'>Vercel</a> which is the awesome alternative to
        Netlify. <br/><br/>
      </p>

      </div>
    </div>
  </div>
);

export default Home;
