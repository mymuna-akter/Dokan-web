import React from "react";
import Heading from "../../common/Heading";

const DailyNavigation = () => {
    return (
        <div>
          <form action="" className="card p-4">
            <Heading title="Get Memo" />
            <div className="form-group">
              <label>Select Date</label>
              <input
                type="date"
                className="form-control mt-2"
                placeholder="Select Date"
              //   onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-outline-primary mt-3"
              // onClick={getDayData}
            >
              Show Memo
            </button>
          </form>
      </div>
    )};

export default DailyNavigation;