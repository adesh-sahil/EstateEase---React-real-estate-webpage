import Filter from "../../componants/Filter/Filter";
import Card from "../../componants/Card/card";
import Map from "../../componants/map/map";
// import { listData } from "../../lib/dummydata";
import "./listPage.scss";
import { Await, useLoaderData } from "react-router-dom"; 
import {Suspense} from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function ListPage() {
  const data = useLoaderData();
  const Loader = () => (
    <div className="loader-container">
      <BounceLoader color={"#3498db"} size = {150}/>
    </div>
  );
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<Loader/>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => (
                  <Card key={post.id} item={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
      <Suspense fallback={<Loader/>}>
          <Await
            resolve={data.postResponse}
            errorElement={<p>Error loading posts!</p>}
          >
            {(postResponse) => <Map items={postResponse.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
