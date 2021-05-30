import React, { useState } from "react";
import { useSelector } from "react-redux";

const ReadSidebar = ({ name, selfIntroduce, category}) => {

  const cnt = useSelector(state => state.resumes.count)
  const [countYear, setCountYear] = useState();

  console.log("cnt: ", cnt)
  
return (<>
  <div className="col-md-3 col-sm-3 col-xs-12">
    <div className="widget sidebar_widget">
      <h5 className="aside-title">아티스트 소개</h5>
      <form className="search-form" method="get">
      <h4 className="aside-title">{name}</h4>
      </form>
    </div>
    <div className="mb-50">
      <p className="mt-30">
        {selfIntroduce}
      </p>
    </div>
        {category ? (
            <div className="sidebar_widget widget_categories mb-50">
              <h5 className="aside-title">Categories</h5>
                <ul>
                  <li>
                  
                    <p>{category}</p>
                 
                  </li>
                </ul>
              </div>
                ) : null}
    
    <div className="sidebar_widget widget_archive mb-50">
      <h5 className="aside-title">Archive</h5>
      <ul>
        <li>
          <p>2021년</p><span>14</span>
        </li>
      </ul>
    </div>
  </div>
</>)
};

export default ReadSidebar;
