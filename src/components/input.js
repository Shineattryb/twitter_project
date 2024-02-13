import React, { ChangeEvent, JSXElementConstructor, useState } from "react";
import { InputField, FieldLabel, FieldGroup } from '@attrybtech/attryb-ui';

const Input = ({settweetcontent}) => {
    const [value, setValue] = React.useState("");
    const maxChars = 160;


    // const handleBlur = () => {
    //     if (!value.trim()) {
    //         alert("Please enter a tweet.");
    //     }
    // };


    return (
        <div className="Doc DocInputField">
            {/* <h1>TextField</h1> */}
            <div className="DocEntry">
                {/* <h3>Default</h3> */}
                <div className="Example">
                    <FieldGroup name="sample-text-field">
                        <FieldLabel
                            name="nnnn"
                            forFieldValue={value}
                            maxCharsLimit={maxChars}>
                            Enter Tweet
                        </FieldLabel>
                        <InputField
                            name="input-one"
                            state={"default"}
                            placeholder={"Lorem is ipsum..."}
                            preFilledValue={value}
                            maxCharsLimit={maxChars}
                            
                            onChange={(event) => {
                                
                                const val = event?.target?.value;
                                console.log(val);
                                // if(!val.trim()){
                                //     alert("please enter a tweet.");
                                // }
                                setValue(val);
                                settweetcontent(val);
                            }}
                            // onBlur={handleBlur}
                        />
                       
                    </FieldGroup>
                </div>
            </div>
        </div>
    )
}

export default Input;
