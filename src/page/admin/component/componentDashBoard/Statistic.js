
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrder } from "../../../../redux/action/Cart";

const Statistic = ({ month, startDate })=>{
    const labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    let dataStatistic = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
    const formatStartDate = moment(startDate).format("MM-YYYY");
    const { t } = useTranslation('common');
    const dispatch = useDispatch()
    const listAllOrder = useSelector(state=>state.cart.listAllOrder)
    
    useEffect(() => {

        dispatch(fetchAllOrder())
      
    }, [formatStartDate])
        
    const countProDate = () => {
        if (listAllOrder.length > 0) {
           const listOrdersDate = listAllOrder.filter(v => {
            const dateOrder = moment(v.time).format("DD-YYYY");
            return dateOrder===formatStartDate
          });
    
          const countBuy = listOrdersDate.reduce((prev, next) => {
            prev[next.time] = (++prev[next.time]) || 1;
            return prev;
          }, {});
          buyByDate(countBuy);
        }
      };
    
      const buyByDate=countBuy=> {
        const listBuyByDate = [];
        for (let key in countBuy) {
          listBuyByDate.push({ date: key, amount: countBuy[key] });
        }
        setToStatistic(listBuyByDate);
      }
    
      const setToStatistic =list=> {
        for (let v of list) {
          const date = moment(v.date).format("MM");
          if (labels.includes(date)) {
            dataStatistic.splice(labels.indexOf(date), 0, v.amount);
          }
        }
      }
      countProDate();
    
      const data = {
            labels: labels,
            datasets: [
                {
                    label: t('cart.column4'),
                    data: dataStatistic,
                    backgroundColor: '#3fb871 '
                }
            ]
        };
    return(
      <React.Fragment>
        <Bar
			  data={data}
            height={200}
            options={{
                responsive: true,
                maintainAspectRatio: false
         }}
			 />
      </React.Fragment>
    )
}
export default Statistic
