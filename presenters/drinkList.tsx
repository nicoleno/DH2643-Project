import React, { useEffect } from 'react';
import { DrinkListItem } from '../models/model';
import DrinkListView from '../views/DrinkListView';

const DrinkList = ({ navigation }) => {
    const Data = [...(Array(30).keys())].map(i => ({ label: `${i + 1}  of 30`, value: `${i + 1}`, have: "Vodka", need: "Redbull", name: "Tommys Margharita" }));
    const dataArray = Data.map(item => {
        const listItem: DrinkListItem = {
            label: item.label,
            value: item.label,
            have: item.have,
            need: item.need,
            name: item.name
        };
        return listItem;
    });
    const card_width = 300;
    const card_height = 500;

    return (
        <DrinkListView navigation={navigation} dataList={dataArray} />
    )
}
export default DrinkList;