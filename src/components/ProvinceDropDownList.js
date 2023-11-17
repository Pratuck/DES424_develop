import { useMemo, useState } from "react";  
import { DropDownList } from "@progress/kendo-react-dropdowns";  
import { AutoComplete } from "@progress/kendo-react-dropdowns"; 
import '@progress/kendo-theme-default/dist/all.css';   
 
const data = [
  {id:1 ,label:"Amnat Charoen",region:"North East"},
  {id:2 ,label:"Ang Thong",region:"Central"},
  {id:3 ,label:"Bangkok",region:"Central"},
  {id:4 ,label:"Bueng Kan",region:"North East"},
  {id:5 ,label:"Buriram",region:"North East"},
  {id:6 ,label:"Chachoengsao",region:"Central"},
  {id:7 ,label:"Chai Nat",region:"Central"},
  {id:8 ,label:"Chaiyaphum",region:"North East"},
  {id:9 ,label:"Chanthaburi",region:"East"},
  {id:10 ,label:"Chiang Mai",region:"North"},
  {id:11,label:"Chiang Rai",region:"North"},
  {id:12 ,label:"Chonburi",region:"East"},
  {id:13 ,label:"Chumphon",region:"South"},
  {id:14 ,label:"Kalasin",region:"North East"},
  {id:15 ,label:"Kamphaeng Phet",region:"North"},
  {id:16 ,label:"Kanchanaburi",region:"West"},
  {id:17 ,label:"Khon Kaen",region:"North East"},
  {id:18 ,label:"Krabi",region:"South"},
  {id:19 ,label:"Lampang",region:"North"},
  {id:20 ,label:"Lamphun",region:"North"},
  {id:21 ,label:"Loei",region:"North East"},
  {id:22 ,label:"Lopburi",region:"Central"},
  {id:23 ,label:"Mae Hong Son",region:"North"},
  {id:24 ,label:"Maha Sarakham",region:"North East"},
  {id:25 ,label:"Mukdahan",region:"North East"},
  {id:26 ,label:"Nakhon Nayok",region:"Central"},
  {id:27 ,label:"Nakhon Pathom",region:"Central"},
  {id:28 ,label:"Nakhon Phanom",region:"North East"},
  {id:29 ,label:"Nakhon Ratchasima",region:"North East"},
  {id:30 ,label:"Nakhon Sawan",region:"Central"},
  {id:31 ,label:"Nakhon Si Thammarat",region:"South"},
  {id:32 ,label:"Nan",region:"North"},
  {id:33 ,label:"Narathiwat",region:"South"},
  {id:34 ,label:"Nong Bua Lamphu",region:"North East"},
  {id:35 ,label:"Nong Khai",region:"North East"},
  {id:36 ,label:"Nonthaburi",region:"Central"},
  {id:37 ,label:"Pathum Thani",region:"Central"},
  {id:38 ,label:"Pattani",region:"South"},
  {id:39 ,label:"Phang Nga",region:"South"},
  {id:40 ,label:"Phatthalung",region:"South"},
  {id:41 ,label:"Phayao",region:"North"},
  {id:42 ,label:"Phetchabun",region:"North"},
  {id:43 ,label:"Phetchaburi",region:"Central"},
  {id:44 ,label:"Phichit",region:"North"},
  {id:45 ,label:"Phitsanulok",region:"North"},
  {id:46 ,label:"Phra Nakhon Si Ayutthaya",region:"Central"},
  {id:47 ,label:"Phrae",region:"North"},
  {id:48 ,label:"Phuket",region:"South"},
  {id:49 ,label:"Prachinburi",region:"East"},
  {id:50 ,label:"Prachuap Khiri Khan",region:"South"},
  {id:51 ,label:"Ranong",region:"South"},
  {id:52 ,label:"Ratchaburi",region:"Central"},
  {id:53 ,label:"Rayong",region:"East"},
  {id:54 ,label:"Roi Et",region:"North East"},
  {id:55 ,label:"Sa Kaeo",region:"East"},
  {id:56 ,label:"Sakon Nakhon",region:"North East"},
  {id:57 ,label:"Samut Prakan",region:"Central"},
  {id:58 ,label:"Samut Sakhon",region:"Central"},
  {id:59 ,label:"Samut Songkhram",region:"Central"},
  {id:60 ,label:"Saraburi",region:"Central"},
  {id:61 ,label:"Satun",region:"South"},
  {id:62 ,label:"Sing Buri",region:"Central"},
  {id:63 ,label:"Sisaket",region:"North East"},
  {id:64 ,label:"Songkhla",region:"South"},
  {id:65 ,label:"Sukhothai",region:"North"},
  {id:66 ,label:"Suphanburi",region:"Central"},
  {id:67 ,label:"Surat Thani",region:"South"},
  {id:68 ,label:"Surin",region:"North East"},
  {id:69 ,label:"Tak",region:"North"},
  {id:70 ,label:"Trang",region:"South"},
  {id:71 ,label:"Trat",region:"East"},
  {id:72 ,label:"Ubon Ratchathani",region:"North East"},
  {id:73 ,label:"Udon Thani",region:"North East"},
  {id:74 ,label:"Uthai Thani",region:"Central"},
  {id:75 ,label:"Uttaradit",region:"North"},
  {id:76 ,label:"Yala",region:"South"},
  {id:77 ,label:"Yasothon",region:"North East"}
]
const data2 = [{label: 'Amnat Charoen'},
{label: 'Ang Thong'},
{label: 'Bangkok'},
{label: 'Bueng Kan'},
{label: 'Buriram'},
{label: 'Chachoengsao'},
{label: 'Chai Nat'},
{label: 'Chaiyaphum'},
{label: 'Chanthaburi'},
{label: 'Chiang Mai'},
{label: 'Chiang Rai'},
{label: 'Chonburi'},
{label: 'Chumphon'},
{label: 'Kalasin'},
{label: 'Kamphaeng Phet'},
{label: 'Kanchanaburi'},
{label: 'Khon Kaen'},
{label: 'Krabi'},
{label: 'Lampang'},
{label: 'Lamphun'},
{label: 'Loei'},
{label: 'Lopburi'},
{label: 'Mae Hong Son'},
{label: 'Maha Sarakham'},
{label: 'Mukdahan'},
{label: 'Nakhon Nayok'},
{label: 'Nakhon Pathom'},
{label: 'Nakhon Phanom'},
{label: 'Nakhon Ratchasima'},
{label: 'Nakhon Sawan'},
{label: 'Nakhon Si Thammarat'},
{label: 'Nan'},
{label: 'Narathiwat'},
{label: 'Nong Bua Lamphu'},
{label: 'Nong Khai'},
{label: 'Nonthaburi'},
{label: 'Pathum Thani'},
{label: 'Pattani'},
{label: 'Phang Nga'},
{label: 'Phatthalung'},
{label: 'Phayao'},
{label: 'Phetchabun'},
{label: 'Phetchaburi'},
{label: 'Phichit'},
{label: 'Phitsanulok'},
{label: 'Phra Nakhon Si Ayutthaya'},
{label: 'Phrae'},
{label: 'Phuket'},
{label: 'Prachinburi'},
{label: 'Prachuap Khiri Khan'},
{label: 'Ranong'},
{label: 'Ratchaburi'},
{label: 'Rayong'},
{label: 'Roi Et'},
{label: 'Sa Kaeo'},
{label: 'Sakon Nakhon'},
{label: 'Samut Prakan'},
{label: 'Samut Sakhon'},
{label: 'Samut Songkhram'},
{label: 'Saraburi'},
{label: 'Satun'},
{label: 'Sing Buri'},
{label: 'Sisaket'},
{label: 'Songkhla'},
{label: 'Sukhothai'},
{label: 'Suphanburi'},
{label: 'Surat Thani'},
{label: 'Surin'},
{label: 'Tak'},
{label: 'Trang'},
{label: 'Trat'},
{label: 'Ubon Ratchathani'},
{label: 'Udon Thani'},
{label: 'Uthai Thani'},
{label: 'Uttaradit'},
{label: 'Yala'},
{label: 'Yasothon'}]
// Dropdown categories  
const categories = ["all","North", "East", "North East", "West", "Central",  "South"]

const ProvinceAutoComplete = () => {  
  return (  
    <form className="k-form k-my-8">  
      <label className="k-label k-mb-3">Select Province</label>  
      <AutoComplete data={data2} textField="label" suggest />  
    </form>  
  );  
};
  


  

const ProvinceDropDownList = () => {  

  const [category, setCategory] = useState("");  
  const filteredData = useMemo(() => {  
    if (!category || category === "all") return data;  
  
    return data.filter(item => item.region === category);  
}, [category]);  
  

  return (
    <section className="k-my-8">
      <form className="k-form k-mb-4">
        <label className="k-label k-mb-3">Category</label>
        <DropDownList data={categories} onChange={e => setCategory(e.value)} />
      </form>

      <section className="k-listgroup">
        <ul>
          {filteredData.map(item => {
            return (
              <li key={item.id} className="k-listgroup-item">
                {item.label}
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
export default (ProvinceDropDownList,ProvinceAutoComplete);