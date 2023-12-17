import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ previousPath, activePath }) => {
  return (
    <div className="flex flex-col px-1 md:flex-row lg:flex-row py-4 ">
      <ol className="flex items-center text-dark-grey">
        {previousPath.map((item) => (
          <>
            <Link to={item.linkNav}>
              <li className="text-xs font-bold md:text-base lg:text-base cursor-pointer">
                {item.displayName}
              </li>
            </Link>
            <span className="mx-3 text-gray-400">{<IoIosArrowForward />}</span>
          </>
        ))}
        <li className="text-my-navy text-xs font-bold md:text-base lg:text-base cursor-pointer capitalize">
          {activePath}
        </li>
      </ol>
    </div>
  );
};

export default Breadcrumbs;
