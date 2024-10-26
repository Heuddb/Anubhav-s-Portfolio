import {ServicesData} from '../../assets/services'
import "./services.css";
import { FaArrowRight } from "react-icons/fa";
function Services() {
  return (
    <>
      <div id="Services" className="my_services">
        <div className="title">
          <h1 style={{textAlign:"center"}} >MY SERVICES</h1>
        </div>

        <div className="services_container">
          {ServicesData.map((serve, item) => {
            return (
              <>
                <div className="card_container">
                  <h2>{serve.no}</h2>
                  <h3>{serve.title}</h3>
                  <p>{serve.desc}</p>

                  <div  className="read">
                    <button className="read_btn">Read more </button>
                    <FaArrowRight />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
