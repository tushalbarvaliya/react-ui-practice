
import cloud from "../assets/cloud.svg";
import './style.css';  

export const HomePart3 = () => {
  return (
    <div className="container">
      <div className="card">
        <img src={cloud} alt="Cloud" />
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
      <div className="card mt-20">
        <img src={cloud} alt="Cloud" />
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
      <div className="card mt-40">
        <img src={cloud} alt="Cloud" />
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
    </div>
  );
};
