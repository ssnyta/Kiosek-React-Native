import { Nav } from "../../components/nav/Nav";
import { Card } from "../../components/card/Card";
export const MainPage = () => {
  return (
    <>
      <div className="navigation">
        <Nav />
      </div>
      <div className="container text-center">
        <div className="hodiny">
          <h2> Probíhající hodiny</h2>
        </div>
        <div className="aktuality">
            <h1>Novinky na naší škole:</h1>
          <div className="row">
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};
