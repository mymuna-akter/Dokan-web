import React from "react";
import { Fade } from "react-awesome-reveal";
import PageHeader from "../components/common/PageHeader"
import ActionPanel from "../components/memo/ActionPanel"
import ViewPanel from "../components/memo/ViewPanel"
import { MemoDataProvider } from "../components/memo/MemoModel/MemoDataContext";

const Memo = () => {
console.log("hello memo");
return (
    <div>
        <MemoDataProvider>
        <PageHeader title="Memo" />  
        <Fade>
            <ActionPanel/>
        </Fade>
        <ViewPanel/>
     </MemoDataProvider>
    </div>
)
};

export default Memo;