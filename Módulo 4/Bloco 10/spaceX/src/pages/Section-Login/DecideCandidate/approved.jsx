/* eslint-disable array-callback-return */
import React from "react";

//* Import Styles
import { DivAproveds, DivAprove } from "./style";

const Approved = ({ approved }) => {

    return (
        <DivAprove>

            {
                approved.map((approveds) => {
                    return (
                        <DivAproveds key={approveds.id}>
                            <h3>{approveds.name}</h3>
                        </DivAproveds>
                    )
                })
            }

        </DivAprove>
    );
};

export default Approved ;