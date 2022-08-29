import React from "react"
import Heading from "../../common/Heading";

const SellMemoForm = () => {
    return(
        <div>
            <form action="" className="card p-4">
                <Heading title="Sell Memo" />
                <div className="form-group">
                    <div>
                        <label>Name:</label>
                        <input className="form-control mt-2" type="text" name="name" />
                    </div>
                    <div>
                        <label>Date:</label>
                        <input
                            type="date"
                            className="form-control mt-2"
                            placeholder="Select Date"
                        //   onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary mt-3"
                    // onClick={getDayData}
                    >
                    Save
                </button>
            </form>
        </div>
    )
};

export default SellMemoForm;