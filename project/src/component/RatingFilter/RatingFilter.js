import React from 'react';
import { Legend } from '../FilterComponents/Legend';
import { Checkbox, CheckBoxLabel,  LabelContainer} from '../FilterComponents/CheckBox';
import { Fieldset } from '../FilterComponents/Fieldset';
import {RatingBox} from '../RatingBox/RatingBox'

export const RatingFilter = () => {
    return (
    <Fieldset>
        <Legend>Rating</Legend>
        <LabelContainer>
            <Checkbox type="checkbox" id={5}/>
            <CheckBoxLabel for={5}>
                <RatingBox rate={5} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" id={4}/>
            <CheckBoxLabel for={4}>
                <RatingBox rate={4} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" id={3}/>
            <CheckBoxLabel for={3}>
                <RatingBox rate={3} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" id={2}/>
            <CheckBoxLabel for={2}>
                <RatingBox rate={2} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" id={1}/>
            <CheckBoxLabel for={1}>
                <RatingBox rate={1} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>
    </Fieldset>
    );
}

