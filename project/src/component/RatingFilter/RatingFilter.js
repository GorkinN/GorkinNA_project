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
            <Checkbox type="checkbox" name="ratingCheckBox" id="rate_5" value={5}/>
            <CheckBoxLabel htmlFor="rate_5">
                <RatingBox rate={5} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" name="ratingCheckBox"  id="rate_4" value={4}/>
            <CheckBoxLabel htmlFor="rate_4">
                <RatingBox rate={4} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" name="ratingCheckBox"  id="rate_3" value={3}/>
            <CheckBoxLabel htmlFor="rate_3">
                <RatingBox rate={3} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" name="ratingCheckBox"  id="rate_2" value={2}/>
            <CheckBoxLabel htmlFor="rate_2">
                <RatingBox rate={2} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>

        <LabelContainer>
            <Checkbox type="checkbox" name="ratingCheckBox" id="rate_1" value={1}/>
            <CheckBoxLabel htmlFor="rate_1">
                <RatingBox rate={1} isGolden={true}></RatingBox>
            </CheckBoxLabel>
        </LabelContainer>
    </Fieldset>
    );
}

