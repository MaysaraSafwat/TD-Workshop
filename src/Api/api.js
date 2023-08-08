import axios from "axios";

export const getFeed = async (n)=>{
    try{
        console.log("INSIDE GET FIRST SEVEN mETHOD")
        const res = await axios.get("https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss")
        let Items;
        if(n===7){
             Items = res.data.items.slice(0, 7); 
        }else {
             Items = res.data.items.slice(7, n); 
        }
        return Items;

      }catch(err){
        console.log(err)
      }
}