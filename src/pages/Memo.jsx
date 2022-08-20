import React from "react";
import { Fade } from "react-awesome-reveal";
import PageHeader from "../components/common/PageHeader"
import ActionPanel from "../components/memo/ActionPanel"
import ViewPanel from "../components/memo/ViewPanel"

const Memo = () => {

return (
    <div>
        <PageHeader title="Memo" />
        <Fade>
            <ActionPanel></ActionPanel>
        </Fade>
        <ViewPanel></ViewPanel>
    </div>
)
};

export default Memo;